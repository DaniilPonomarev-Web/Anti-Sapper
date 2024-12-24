<template>
  <div id="app">
    <div v-if="isLoading" class="loading">Загрузка...</div>

    <div v-if="!gameId">
      <h1>Создать или подключиться к игре</h1>

      <!-- Форма для создания игры -->
      <form @submit.prevent="createGame">
        <label>
          Размер поля:
          <input type="number" v-model.number="size" required min="1" max="6" />
        </label>
        <br />
        <label>
          Количество алмазов:
          <input type="number" v-model.number="diamondsCount" required min="1" />
        </label>
        <br />
        <button type="submit">Создать игру</button>
      </form>

      <!-- Форма для подключения -->
      <form @submit.prevent="joinGame">
        <label>
          ID игры:
          <input type="number" v-model.number="joinGameId" required />
        </label>
        <br />
        <button type="submit">Присоединиться к игре</button>
      </form>
    </div>

    <!-- информация  о игре когда она создана -->
    <div v-if="gameId && game">
      <h2>Игра номер {{ gameId }} началась!</h2>
      <!--  //TODO вывести имя игрока -->
      <p>Ход игрока {{ playerId }}</p>
      <!-- Информация об игроках -->
      <div v-if="game.players">
        <h3>Игроки:</h3>
        <ul>
          <li v-for="player in game.players" :key="player.id">
            {{ player.name }} - Собрано алмазов: {{ player.diamondsCollected }}
          </li>
        </ul>
      </div>

      <!-- Сетка игры -->
      <div class="grid" :style="{ gridTemplateColumns: `repeat(${game.size}, 1fr)` }">
        <div v-for="rowIndex in game.size" :key="rowIndex" class="row">
          <div v-for="colIndex in game.size" :key="colIndex" class="cell"
            :class="{ opened: isCellOpened(rowIndex - 1, colIndex - 1) }" @click="openCell(rowIndex - 1, colIndex - 1)">
            {{ getCellContent(rowIndex - 1, colIndex - 1) }} <!-- Сдвиг индексов на 1 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { io } from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      isLoading: false, // индикатор загрузки
      size: 5, // размер поля
      diamondsCount: 23, // количество алмазов
      gameId: null, // ид текущей игры
      game: null, // данные текущей игры
      socket: null, // ws подключения
      playerId: null, // ид игрока
      currentPlayerIndex: 0, // индекс текущего игрока
      joinGameId: null, // ид игры для подключения
    };
  },
  methods: {
    // TODO уведомление что игрок какой-то вышел
    // TODO адрес сделать в энвы 
    async createGame() {
      this.isLoading = true;
      try {
        this.playerId = uuidv4();
        const response = await axios.post('http://localhost:3010/game/create', {
          size: this.size,
          diamonds: this.diamondsCount,
          playerId: this.playerId, 
        });
        this.gameId = response.data.id;

        console.warn('Создана игра:', { gameId: this.gameId, playerId: this.playerId });
        if (!this.socket) {
          this.connectToGame();
        }
        this.socket.emit('joinGame', { gameId: this.gameId, playerId: this.playerId });
        this.fetchGameData(this.gameId);
      } catch (error) {
        console.error('Ошибка при создании игры:', error);
      } finally {
        this.isLoading = false;
      }
    },

    async joinGame() {
      if (!this.joinGameId) {
        console.error('ID игры не указан!');
        return;
      }
      this.playerId = this.playerId || uuidv4();
      if (!this.socket) {
        this.connectToGame();
      }
      this.socket.emit('joinGame', { gameId: this.joinGameId, playerId: this.playerId });
      this.gameId = this.joinGameId;
    },

    async fetchGameData(gameId) {
      this.isLoading = true;
      try {
        const response = await axios.get(`http://localhost:3010/game/${gameId}`);
        this.game = response.data;
        console.log('Данные игры загружены:', this.game);
      } catch (error) {
        console.error('Ошибка при загрузке игры:', error);
        alert('Ошибка при загрузке игры: ' + error.message);
      } finally {
        this.isLoading = false;
      }
    },

    connectToGame() {
      if (this.socket) return; //TODO повторная инициализация

      this.socket = io('http://localhost:3010', { transports: ['websocket'] });

      this.socket.on('connect', () => {
        console.log('Подключено к WebSocket серверу');
      });

      this.socket.on('gameUpdated', (gameData) => {
        console.log('Игра обновлена:', gameData);
        this.game = gameData;
      });

      this.socket.on('cellOpened', (result) => {
        if (result.result === 'number') {
          alert('Ход перешел');
        } 
        // if (result.result === 'diamond') {
        //   console.log('игрок нашел алмаз!');
        // }
        if (result.result === 'game_over') {
           alert(`Игра окончена, ПОБЕДА за ${result.winner} 🎆🎆🎆`);
        }
      });
    },

    isCellOpened(row, col) {
      return this.game && this.game.openedCells.some((cell) => cell.x === col && cell.y === row);
    },

    getCellContent(row, col) {
      if (!this.isCellOpened(row, col)) {
        return '';
      }
      const diamond = this.game.diamonds.find((d) => d.x === col && d.y === row);
      if (diamond) return '💎';
      const openedCell = this.game.openedCells.find((cell) => cell.x === col && cell.y === row);
      return openedCell?.value || '👻'; //TODO тут должно быть число, но его нет
    },

    async openCell(row, col) {
      if (this.isCellOpened(row, col)) return;

      this.isLoading = true;
      try {
        this.socket.emit('openCell', {
          gameId: this.gameId,
          playerId: this.playerId,
          x: col,
          y: row,
        });
      } catch (error) {
        console.error('Ошибка при открытии клетки:', error);
        alert('Ошибка при открытии клетки: ' + error.message);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

//TODO Стили в отдельный файл
<style>
#app {
  font-family: Arial, sans-serif;
  padding: 20px;
}

form {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

div {
  margin-top: 20px;
}

.grid {
  display: grid;
  gap: 5px;
  margin-top: 20px;
  max-width: 300px;
}

.cell {
  width: 30px;
  height: 30px;
  background-color: #d3d3d3;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  border: 1px solid #aaa;
  font-size: 18px;
  color: #000;
}

.cell.opened {
  background-color: #e0e0e0;
  cursor: default;
}

h3 {
  margin-top: 20px;
}
</style>