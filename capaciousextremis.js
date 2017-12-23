define(["require", "exports", "mod/Mod", "Enums"], function (require, exports, Mod_1, Enums_1) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CapaciousExtremis;
});
