import Mod from "mod/Mod";
import { ItemType } from "Enums";
import { HookMethod } from "mod/IHookHost";

export default class CapaciousExtremis extends Mod {

    public onInitialize(saveDataGlobal: any): any {
    }

    @HookMethod
    public onBuild(player: IPlayer, item: IItem, tile: ITile, doodad: IDoodad): void {

        let isChest = item.type == ItemType.WoodenChest
            || item.type == ItemType.WroughtIronChest
            || item.type == ItemType.IronChest
            || item.type == ItemType.OrnateWoodenChest;

        if (isChest) {
            doodad.weightCapacity *= doodad.weightCapacity;
        }
    }

}
