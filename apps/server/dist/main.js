/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/core/src/core.module.ts":
/*!**************************************!*\
  !*** ./libs/core/src/core.module.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CoreModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let CoreModule = class CoreModule {
};
exports.CoreModule = CoreModule;
exports.CoreModule = CoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async () => Object.assign(await (0, typeorm_2.getConnectionOptions)(), {
                    entities: (0, typeorm_2.getMetadataArgsStorage)().tables.map((tbl) => {
                        return tbl.target;
                    }),
                }),
            }),
        ],
    })
], CoreModule);


/***/ }),

/***/ "./libs/core/src/index.ts":
/*!********************************!*\
  !*** ./libs/core/src/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./core.module */ "./libs/core/src/core.module.ts"), exports);


/***/ }),

/***/ "./libs/diamond/src/diamond.module.ts":
/*!********************************************!*\
  !*** ./libs/diamond/src/diamond.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DiamondModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const diamond_service_1 = __webpack_require__(/*! ./diamond.service */ "./libs/diamond/src/diamond.service.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const shared_1 = __webpack_require__(/*! @app/shared */ "./libs/shared/src/index.ts");
let DiamondModule = class DiamondModule {
};
exports.DiamondModule = DiamondModule;
exports.DiamondModule = DiamondModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([shared_1.DiamondEntity])],
        providers: [diamond_service_1.DiamondService],
        exports: [diamond_service_1.DiamondService],
    })
], DiamondModule);


/***/ }),

/***/ "./libs/diamond/src/diamond.service.ts":
/*!*********************************************!*\
  !*** ./libs/diamond/src/diamond.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DiamondService = void 0;
const shared_1 = __webpack_require__(/*! @app/shared */ "./libs/shared/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let DiamondService = class DiamondService {
    constructor(diamondRepository) {
        this.diamondRepository = diamondRepository;
    }
    async generateRandomCoordinatesDiamonds(size, diamondsCount) {
        const diamonds = [];
        const usedCoordinates = new Set();
        while (diamonds.length < diamondsCount) {
            const x = Math.floor(Math.random() * size);
            const y = Math.floor(Math.random() * size);
            const coordKey = `${x},${y}`;
            if (!usedCoordinates.has(coordKey)) {
                const diamond = new shared_1.DiamondEntity();
                diamond.x = x;
                diamond.y = y;
                diamonds.push(diamond);
                usedCoordinates.add(coordKey);
            }
        }
        return this.diamondRepository.save(diamonds);
    }
};
exports.DiamondService = DiamondService;
exports.DiamondService = DiamondService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shared_1.DiamondEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], DiamondService);


/***/ }),

/***/ "./libs/diamond/src/index.ts":
/*!***********************************!*\
  !*** ./libs/diamond/src/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./diamond.module */ "./libs/diamond/src/diamond.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./diamond.service */ "./libs/diamond/src/diamond.service.ts"), exports);


/***/ }),

/***/ "./libs/player/src/index.ts":
/*!**********************************!*\
  !*** ./libs/player/src/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./player.module */ "./libs/player/src/player.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./player.service */ "./libs/player/src/player.service.ts"), exports);


/***/ }),

/***/ "./libs/player/src/player.module.ts":
/*!******************************************!*\
  !*** ./libs/player/src/player.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const player_service_1 = __webpack_require__(/*! ./player.service */ "./libs/player/src/player.service.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const shared_1 = __webpack_require__(/*! @app/shared */ "./libs/shared/src/index.ts");
let PlayerModule = class PlayerModule {
};
exports.PlayerModule = PlayerModule;
exports.PlayerModule = PlayerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([shared_1.PlayerEntity])],
        providers: [player_service_1.PlayerService],
        exports: [player_service_1.PlayerService],
    })
], PlayerModule);


/***/ }),

/***/ "./libs/player/src/player.service.ts":
/*!*******************************************!*\
  !*** ./libs/player/src/player.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerService = void 0;
const shared_1 = __webpack_require__(/*! @app/shared */ "./libs/shared/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let PlayerService = class PlayerService {
    constructor(playerRepository) {
        this.playerRepository = playerRepository;
    }
    async createPlayerForGame(game, playerId) {
        const player = new shared_1.PlayerEntity();
        player.id = playerId;
        console.warn(game);
        player.name = `Игрок ${game.players?.length ? game.players.length + 1 : 1}`;
        player.diamondsCollected = 0;
        const newPlayer = await this.playerRepository.save(player);
        return newPlayer;
    }
    async savePlayer(player) {
        return await this.playerRepository.save(player);
    }
};
exports.PlayerService = PlayerService;
exports.PlayerService = PlayerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shared_1.PlayerEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PlayerService);


/***/ }),

/***/ "./libs/shared/src/entities/diamond.entity.ts":
/*!****************************************************!*\
  !*** ./libs/shared/src/entities/diamond.entity.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DiamondEntity = void 0;
const shared_1 = __webpack_require__(/*! @app/shared */ "./libs/shared/src/index.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let DiamondEntity = class DiamondEntity {
};
exports.DiamondEntity = DiamondEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DiamondEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'координаты алмаза по X' }),
    __metadata("design:type", Number)
], DiamondEntity.prototype, "x", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'координаты алмаза по Y' }),
    __metadata("design:type", Number)
], DiamondEntity.prototype, "y", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shared_1.GameEntity, (game) => game.diamonds, { onDelete: 'CASCADE' }),
    __metadata("design:type", typeof (_a = typeof shared_1.GameEntity !== "undefined" && shared_1.GameEntity) === "function" ? _a : Object)
], DiamondEntity.prototype, "game", void 0);
exports.DiamondEntity = DiamondEntity = __decorate([
    (0, typeorm_1.Entity)('diamond')
], DiamondEntity);


/***/ }),

/***/ "./libs/shared/src/entities/game.entity.ts":
/*!*************************************************!*\
  !*** ./libs/shared/src/entities/game.entity.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameEntity = void 0;
const shared_1 = __webpack_require__(/*! @app/shared */ "./libs/shared/src/index.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let GameEntity = class GameEntity {
};
exports.GameEntity = GameEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GameEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'размер поля х2' }),
    __metadata("design:type", Number)
], GameEntity.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'кол-во алмазов' }),
    __metadata("design:type", Number)
], GameEntity.prototype, "diamondsCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GameEntity.prototype, "currentPlayerId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shared_1.PlayerEntity, (player) => player.game, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], GameEntity.prototype, "players", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shared_1.DiamondEntity, (diamond) => diamond.game, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], GameEntity.prototype, "diamonds", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', {
        default: [],
        comment: 'открытые клетки (координаты x и y)',
    }),
    __metadata("design:type", Array)
], GameEntity.prototype, "openedCells", void 0);
exports.GameEntity = GameEntity = __decorate([
    (0, typeorm_1.Entity)('game')
], GameEntity);


/***/ }),

/***/ "./libs/shared/src/entities/index.ts":
/*!*******************************************!*\
  !*** ./libs/shared/src/entities/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./game.entity */ "./libs/shared/src/entities/game.entity.ts"), exports);
__exportStar(__webpack_require__(/*! ./player.entity */ "./libs/shared/src/entities/player.entity.ts"), exports);
__exportStar(__webpack_require__(/*! ./diamond.entity */ "./libs/shared/src/entities/diamond.entity.ts"), exports);


/***/ }),

/***/ "./libs/shared/src/entities/player.entity.ts":
/*!***************************************************!*\
  !*** ./libs/shared/src/entities/player.entity.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const game_entity_1 = __webpack_require__(/*! ./game.entity */ "./libs/shared/src/entities/game.entity.ts");
let PlayerEntity = class PlayerEntity {
};
exports.PlayerEntity = PlayerEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'uuid', comment: 'ИД игрока' }),
    __metadata("design:type", String)
], PlayerEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'имя игрока' }),
    __metadata("design:type", String)
], PlayerEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, comment: 'кол-во собранных алмазов' }),
    __metadata("design:type", Number)
], PlayerEntity.prototype, "diamondsCollected", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => game_entity_1.GameEntity, (game) => game.players, { onDelete: 'CASCADE' }),
    __metadata("design:type", typeof (_a = typeof game_entity_1.GameEntity !== "undefined" && game_entity_1.GameEntity) === "function" ? _a : Object)
], PlayerEntity.prototype, "game", void 0);
exports.PlayerEntity = PlayerEntity = __decorate([
    (0, typeorm_1.Entity)('player')
], PlayerEntity);


/***/ }),

/***/ "./libs/shared/src/generators/adjacent-diamonds.ts":
/*!*********************************************************!*\
  !*** ./libs/shared/src/generators/adjacent-diamonds.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.countAdjacentDiamonds = countAdjacentDiamonds;
async function countAdjacentDiamonds(game, x, y) {
    const isInBounds = (x, y) => x >= 0 && x < game.size && y >= 0 && y < game.size;
    const directions = [
        { dx: -1, dy: 0 },
        { dx: -1, dy: -1 },
        { dx: -1, dy: 1 },
        { dx: 0, dy: -1 },
        { dx: 0, dy: 1 },
        { dx: 1, dy: -1 },
        { dx: 1, dy: 0 },
        { dx: 1, dy: 1 },
    ];
    const diamondSet = new Set(game.diamonds.map((diamond) => `${diamond.x},${diamond.y}`));
    return directions.reduce((count, { dx, dy }) => {
        const neighborX = x + dx;
        const neighborY = y + dy;
        if (isInBounds(neighborX, neighborY) &&
            diamondSet.has(`${neighborX},${neighborY}`)) {
            count += 1;
        }
        return count;
    }, 0);
}


/***/ }),

/***/ "./libs/shared/src/generators/index.ts":
/*!*********************************************!*\
  !*** ./libs/shared/src/generators/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./adjacent-diamonds */ "./libs/shared/src/generators/adjacent-diamonds.ts"), exports);


/***/ }),

/***/ "./libs/shared/src/index.ts":
/*!**********************************!*\
  !*** ./libs/shared/src/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./entities */ "./libs/shared/src/entities/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./interfaces */ "./libs/shared/src/interfaces/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./generators */ "./libs/shared/src/generators/index.ts"), exports);


/***/ }),

/***/ "./libs/shared/src/interfaces/diamond.interface.ts":
/*!*********************************************************!*\
  !*** ./libs/shared/src/interfaces/diamond.interface.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/shared/src/interfaces/game.interface.ts":
/*!******************************************************!*\
  !*** ./libs/shared/src/interfaces/game.interface.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/shared/src/interfaces/index.ts":
/*!*********************************************!*\
  !*** ./libs/shared/src/interfaces/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./technical */ "./libs/shared/src/interfaces/technical/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./diamond.interface */ "./libs/shared/src/interfaces/diamond.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./game.interface */ "./libs/shared/src/interfaces/game.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./player.interface */ "./libs/shared/src/interfaces/player.interface.ts"), exports);


/***/ }),

/***/ "./libs/shared/src/interfaces/player.interface.ts":
/*!********************************************************!*\
  !*** ./libs/shared/src/interfaces/player.interface.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/shared/src/interfaces/technical/configuration.interface.ts":
/*!*************************************************************************!*\
  !*** ./libs/shared/src/interfaces/technical/configuration.interface.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/shared/src/interfaces/technical/index.ts":
/*!*******************************************************!*\
  !*** ./libs/shared/src/interfaces/technical/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./configuration.interface */ "./libs/shared/src/interfaces/technical/configuration.interface.ts"), exports);


/***/ }),

/***/ "./src/config/configuration.ts":
/*!*************************************!*\
  !*** ./src/config/configuration.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.configuration = void 0;
exports.configuration = {
    node_env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || '3010',
    postgres: {
        user: process.env.PG_USER,
        pass: process.env.PG_PASS,
        database: process.env.PG_DB,
        port: process.env.PG_PORT,
        log: process.env.PG_LOG,
        sync: process.env.DB_SYNC,
    },
};


/***/ }),

/***/ "./src/config/validation.ts":
/*!**********************************!*\
  !*** ./src/config/validation.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validationSchema = void 0;
const Joi = __webpack_require__(/*! joi */ "joi");
exports.validationSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production').required(),
    PORT: Joi.string().required().default('3010'),
    PG_USER: Joi.string().required(),
    PG_PASS: Joi.string().required(),
    PG_DB: Joi.string().required(),
    PG_PORT: Joi.number().default(5432),
    PG_LOG: Joi.boolean().default(false),
    DB_SYNC: Joi.boolean().default(false),
});


/***/ }),

/***/ "./src/dto/create-game.dto.ts":
/*!************************************!*\
  !*** ./src/dto/create-game.dto.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputCreateGameDTO = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const validator_1 = __webpack_require__(/*! src/validator */ "./src/validator.ts");
class InputCreateGameDTO {
}
exports.InputCreateGameDTO = InputCreateGameDTO;
__decorate([
    (0, class_validator_1.IsInt)({
        message: 'Введите число!',
    }),
    (0, class_validator_1.IsPositive)({
        message: 'Введите положительное число',
    }),
    (0, class_validator_1.Min)(1, {
        message: 'Минимальное число 1',
    }),
    (0, class_validator_1.Max)(6, {
        message: 'Максмальное число 6',
    }),
    __metadata("design:type", Number)
], InputCreateGameDTO.prototype, "size", void 0);
__decorate([
    (0, class_validator_1.IsInt)({
        message: 'Введите число!',
    }),
    (0, class_validator_1.IsPositive)({
        message: 'Введите положительное число',
    }),
    (0, class_validator_1.Min)(1, {
        message: 'Минимальное число 1',
    }),
    (0, class_validator_1.Max)(36, {
        message: 'Максмальное число 36',
    }),
    (0, validator_1.IsOdd)({
        message: 'Число должно быть нечетным!',
    }),
    (0, validator_1.IsSizeSufficient)({
        message: 'Размер поля должен быть достаточным для размещения всех алмазов.',
    }),
    __metadata("design:type", Number)
], InputCreateGameDTO.prototype, "diamonds", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], InputCreateGameDTO.prototype, "playerId", void 0);


/***/ }),

/***/ "./src/dto/join-game.dto.ts":
/*!**********************************!*\
  !*** ./src/dto/join-game.dto.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputJoinGameDTO = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class InputJoinGameDTO {
}
exports.InputJoinGameDTO = InputJoinGameDTO;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], InputJoinGameDTO.prototype, "gameId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], InputJoinGameDTO.prototype, "playerId", void 0);


/***/ }),

/***/ "./src/dto/open-cell.dto.ts":
/*!**********************************!*\
  !*** ./src/dto/open-cell.dto.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputOpenCellDTO = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class InputOpenCellDTO {
}
exports.InputOpenCellDTO = InputOpenCellDTO;
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Введите целое число!' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Id игры' }),
    __metadata("design:type", Number)
], InputOpenCellDTO.prototype, "gameId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Кто сходил' }),
    __metadata("design:type", String)
], InputOpenCellDTO.prototype, "playerId", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Введите целое число!' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Такой клетки нет!' }),
    __metadata("design:type", Number)
], InputOpenCellDTO.prototype, "x", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Введите целое число!' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Такой клетки нет!' }),
    __metadata("design:type", Number)
], InputOpenCellDTO.prototype, "y", void 0);


/***/ }),

/***/ "./src/game.controller.ts":
/*!********************************!*\
  !*** ./src/game.controller.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const game_service_1 = __webpack_require__(/*! ./game.service */ "./src/game.service.ts");
const create_game_dto_1 = __webpack_require__(/*! ./dto/create-game.dto */ "./src/dto/create-game.dto.ts");
let GameController = class GameController {
    constructor(gameService) {
        this.gameService = gameService;
    }
    async createGame(payload) {
        const data = await this.gameService.createGame(payload);
        return data;
    }
    async getGame(gameId) {
        return await this.gameService.getOneGame(gameId);
    }
};
exports.GameController = GameController;
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_game_dto_1.InputCreateGameDTO !== "undefined" && create_game_dto_1.InputCreateGameDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], GameController.prototype, "createGame", null);
__decorate([
    (0, common_1.Get)(':gameId'),
    __param(0, (0, common_1.Param)('gameId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], GameController.prototype, "getGame", null);
exports.GameController = GameController = __decorate([
    (0, common_1.Controller)('game'),
    __metadata("design:paramtypes", [typeof (_a = typeof game_service_1.GameService !== "undefined" && game_service_1.GameService) === "function" ? _a : Object])
], GameController);


/***/ }),

/***/ "./src/game.gateway.ts":
/*!*****************************!*\
  !*** ./src/game.gateway.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameGateway = void 0;
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const http_1 = __webpack_require__(/*! http */ "http");
const game_service_1 = __webpack_require__(/*! ./game.service */ "./src/game.service.ts");
const join_game_dto_1 = __webpack_require__(/*! ./dto/join-game.dto */ "./src/dto/join-game.dto.ts");
const open_cell_dto_1 = __webpack_require__(/*! ./dto/open-cell.dto */ "./src/dto/open-cell.dto.ts");
let GameGateway = class GameGateway {
    constructor(gameService) {
        this.gameService = gameService;
    }
    async handleJoinGame(payload) {
        await this.gameService.joinGame(payload.gameId, payload.playerId);
        const game = await this.gameService.getOneGame(payload.gameId);
        this.server.emit('gameUpdated', game);
    }
    async handleOpenCell(payload) {
        const result = await this.gameService.openCell(payload.gameId, payload.playerId, payload.x, payload.y);
        const game = await this.gameService.getOneGame(payload.gameId);
        this.server.emit('gameUpdated', game);
        this.server.emit('cellOpened', result);
    }
};
exports.GameGateway = GameGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_b = typeof http_1.Server !== "undefined" && http_1.Server) === "function" ? _b : Object)
], GameGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinGame'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof join_game_dto_1.InputJoinGameDTO !== "undefined" && join_game_dto_1.InputJoinGameDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], GameGateway.prototype, "handleJoinGame", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('openCell'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof open_cell_dto_1.InputOpenCellDTO !== "undefined" && open_cell_dto_1.InputOpenCellDTO) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], GameGateway.prototype, "handleOpenCell", null);
exports.GameGateway = GameGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
            credentials: true,
        },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof game_service_1.GameService !== "undefined" && game_service_1.GameService) === "function" ? _a : Object])
], GameGateway);


/***/ }),

/***/ "./src/game.module.ts":
/*!****************************!*\
  !*** ./src/game.module.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const configuration_1 = __webpack_require__(/*! ./config/configuration */ "./src/config/configuration.ts");
const validation_1 = __webpack_require__(/*! ./config/validation */ "./src/config/validation.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const player_1 = __webpack_require__(/*! @app/player */ "./libs/player/src/index.ts");
const diamond_1 = __webpack_require__(/*! @app/diamond */ "./libs/diamond/src/index.ts");
const core_1 = __webpack_require__(/*! @app/core */ "./libs/core/src/index.ts");
const shared_1 = __webpack_require__(/*! @app/shared */ "./libs/shared/src/index.ts");
const game_controller_1 = __webpack_require__(/*! ./game.controller */ "./src/game.controller.ts");
const game_service_1 = __webpack_require__(/*! ./game.service */ "./src/game.service.ts");
const game_gateway_1 = __webpack_require__(/*! ./game.gateway */ "./src/game.gateway.ts");
let GameModule = class GameModule {
};
exports.GameModule = GameModule;
exports.GameModule = GameModule = __decorate([
    (0, common_1.Module)({
        imports: [
            core_1.CoreModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [() => configuration_1.configuration],
                validationSchema: validation_1.validationSchema,
            }),
            typeorm_1.TypeOrmModule.forFeature([shared_1.GameEntity]),
            player_1.PlayerModule,
            diamond_1.DiamondModule,
        ],
        controllers: [game_controller_1.GameController],
        providers: [game_service_1.GameService, game_gateway_1.GameGateway],
    })
], GameModule);


/***/ }),

/***/ "./src/game.service.ts":
/*!*****************************!*\
  !*** ./src/game.service.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameService = void 0;
const diamond_1 = __webpack_require__(/*! @app/diamond */ "./libs/diamond/src/index.ts");
const player_1 = __webpack_require__(/*! @app/player */ "./libs/player/src/index.ts");
const shared_1 = __webpack_require__(/*! @app/shared */ "./libs/shared/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let GameService = class GameService {
    constructor(gameRepository, playerService, diamondService) {
        this.gameRepository = gameRepository;
        this.playerService = playerService;
        this.diamondService = diamondService;
    }
    async getOneGame(gameId) {
        const game = await this.gameRepository.findOne({
            where: { id: gameId },
            relations: ['diamonds', 'players'],
        });
        if (!game) {
            throw new common_1.HttpException('Игра не найдена, начните новую', common_1.HttpStatus.NOT_FOUND);
        }
        return game;
    }
    async createGame(payload) {
        const game = new shared_1.GameEntity();
        game.size = payload.size;
        game.diamondsCount = payload.diamonds;
        game.currentPlayerId = payload.playerId;
        try {
            const generatedDiamonds = await this.diamondService.generateRandomCoordinatesDiamonds(payload.size, payload.diamonds);
            game.diamonds = generatedDiamonds;
            const creatorPlayer = await this.playerService.createPlayerForGame(game, payload.playerId);
            game.players = [creatorPlayer];
            game.players = [];
            const savedGame = await this.gameRepository.save(game);
            return savedGame;
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException('Ошибка создания игры', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async joinGame(gameId, playerId) {
        const game = await this.getOneGame(gameId);
        if (game.players.length >= 2) {
            throw new common_1.HttpException('В игре уже два игрока!', common_1.HttpStatus.BAD_REQUEST);
        }
        if (game.players.some((player) => player.id === playerId)) {
            return `Игрок с ID ${playerId} уже подключён к игре ${gameId}`;
        }
        const player = await this.playerService.createPlayerForGame(game, playerId);
        game.players.push(player);
        await this.gameRepository.save(game);
        return `Игрок с ID ${playerId} успешно подключился к игре с ID ${gameId}`;
    }
    async openCell(gameId, playerId, x, y) {
        const game = await this.getAndValidateGame(gameId);
        if (game.players && game.players.length < 2) {
            throw new common_1.HttpException('Дождитесь второго игрока', common_1.HttpStatus.NOT_FOUND);
        }
        const player = await this.getAndValidatePlayer(game, playerId);
        await this.validateCellNotOpened(game, x, y);
        const diamond = game.diamonds.find((d) => d.x === x && d.y === y);
        await this.addOpenedCell(game, x, y);
        if (diamond) {
            player.diamondsCollected += 1;
            await this.playerService.savePlayer(player);
            const totalCollected = game.players.reduce((sum, p) => sum + p.diamondsCollected, 0);
            if (totalCollected === game.diamondsCount) {
                const winner = game.players.sort((a, b) => b.diamondsCollected - a.diamondsCollected)[0];
                const gameResult = { result: 'game_over', winner: winner.name };
                setTimeout(async () => {
                    try {
                        await this.gameRepository.delete(game.id);
                    }
                    catch (error) {
                        console.error(`Ошибка при удалении игры с ID ${game.id}:`, error);
                    }
                }, 0);
                return gameResult;
            }
            return { result: 'diamond', player: player.id };
        }
        const adjacentDiamonds = await (0, shared_1.countAdjacentDiamonds)(game, x, y);
        await this.switchTurn(game);
        return { result: 'number', value: adjacentDiamonds };
    }
    async getAndValidateGame(gameId) {
        const game = await this.getOneGame(gameId);
        if (!game) {
            throw new common_1.HttpException('Такая игра не найдена', common_1.HttpStatus.NOT_FOUND);
        }
        return game;
    }
    async getAndValidatePlayer(game, playerId) {
        const player = game.players.find((p) => p.id === playerId);
        if (game.currentPlayerId !== playerId) {
            throw new common_1.HttpException('НЕ ТВОЙ ХОД!', common_1.HttpStatus.NOT_FOUND);
        }
        if (!player) {
            throw new common_1.HttpException('Игрок не найден', common_1.HttpStatus.NOT_FOUND);
        }
        return player;
    }
    async validateCellNotOpened(game, x, y) {
        if (game.openedCells.some((cell) => cell.x === x && cell.y === y)) {
            throw new common_1.HttpException('Клетка уже открыта', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async addOpenedCell(game, x, y) {
        game.openedCells.push({ x, y });
        await this.gameRepository.save(game);
    }
    async switchTurn(game) {
        const currentPlayerIndex = game.players.findIndex((p) => p.id === game.currentPlayerId);
        const nextPlayerIndex = (currentPlayerIndex + 1) % game.players.length;
        game.currentPlayerId = game.players[nextPlayerIndex].id;
        await this.gameRepository.save(game);
    }
};
exports.GameService = GameService;
exports.GameService = GameService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shared_1.GameEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof player_1.PlayerService !== "undefined" && player_1.PlayerService) === "function" ? _b : Object, typeof (_c = typeof diamond_1.DiamondService !== "undefined" && diamond_1.DiamondService) === "function" ? _c : Object])
], GameService);


/***/ }),

/***/ "./src/validator.ts":
/*!**************************!*\
  !*** ./src/validator.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsOdd = IsOdd;
exports.IsSizeSufficient = IsSizeSufficient;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
function IsOdd(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsOdd',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    return typeof value === 'number' && value % 2 !== 0;
                },
                defaultMessage(args) {
                    return 'Число должно быть нечетным!';
                },
            },
        });
    };
}
function IsSizeSufficient(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsSizeSufficient',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const object = args.object;
                    return object.size * object.size >= value;
                },
                defaultMessage(args) {
                    return 'Размер поля должен быть достаточным для размещения всех алмазов.';
                },
            },
        });
    };
}


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const game_module_1 = __webpack_require__(/*! ./game.module */ "./src/game.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function bootstrap() {
    const logger = new common_1.Logger();
    const app = await core_1.NestFactory.create(game_module_1.GameModule);
    const port = app.get(config_1.ConfigService).get('port');
    if (!port) {
        throw new Error('Configuration for "port" is missing');
    }
    app.enableCors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        exceptionFactory: (errors) => {
            const formattedErrors = [];
            errors.forEach((error) => {
                if (error.children && error.children.length > 0) {
                    error.children.forEach((childError) => {
                        formattedErrors.push({
                            property: `${error.property}.${childError.property}`,
                            constraints: childError.constraints,
                        });
                    });
                }
                else {
                    formattedErrors.push({
                        property: error.property,
                        constraints: error.constraints,
                    });
                }
            });
            return new common_1.BadRequestException(formattedErrors);
        },
    }));
    await app.listen(port);
    logger.log(`Application running on port ${port}`);
}
bootstrap();

})();

/******/ })()
;