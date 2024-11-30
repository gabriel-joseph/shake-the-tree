import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TreeNodeComponent } from "./tree-node/tree-node.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, TreeNodeComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "shake-the-tree";
}
