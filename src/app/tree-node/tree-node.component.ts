import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: "app-tree-node",
  imports: [MatCardModule, MatChipsModule,MatInputModule],
  templateUrl: "./tree-node.component.html",
  styleUrl: "./tree-node.component.css",
  standalone: true,
})
export class TreeNodeComponent {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;


  rows = 0
  fitness = 0
}
