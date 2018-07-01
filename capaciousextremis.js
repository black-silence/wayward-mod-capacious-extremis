var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "mod/Mod", "Enums", "mod/IHookHost"], function (require, exports, Mod_1, Enums_1, IHookHost_1) {
    "use strict";
    class CapaciousExtremis extends Mod_1.default {
        onInitialize(saveDataGlobal) {
        }
        onBuild(player, item, tile, doodad) {
            let isChest = item.type == Enums_1.ItemType.WoodenChest
                || item.type == Enums_1.ItemType.WroughtIronChest
                || item.type == Enums_1.ItemType.IronChest
                || item.type == Enums_1.ItemType.OrnateWoodenChest;
            if (isChest) {
                doodad.weightCapacity *= doodad.weightCapacity;
            }
        }
    }
    __decorate([
        IHookHost_1.HookMethod
    ], CapaciousExtremis.prototype, "onBuild", null);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CapaciousExtremis;
});
