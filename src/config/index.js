import { configureScrivito } from "./scrivito";
import { configureHistory } from "./history";
import { configureObjClassForContentType } from "./objClassForContentType";
import { configureScrivitoContentBrowser } from "./scrivitoContentBrowser";
import { configureWindowScrivito } from "./windowScrivito";
import { scrivitoExtendMenu} from "./scrivitoExtendMenu";

export function configure(options) {
  configureScrivito(options);
  configureObjClassForContentType();

  if (typeof window !== "undefined") {
    configureScrivitoContentBrowser();
    configureHistory();
    configureWindowScrivito();
    scrivitoExtendMenu();
  }
}
