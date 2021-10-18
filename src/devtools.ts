import { actionsDispatcher } from "@ngneat/effects";
import { devTools } from "@ngneat/elf-devtools";
import { environment } from "src/environments/environment";

if (environment.production === false) {
  devTools({
    actionsDispatcher: actionsDispatcher
  });
}

