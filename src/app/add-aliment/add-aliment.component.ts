import { Component, OnInit } from "@angular/core";
import { AlimentService } from "../aliment.service";

@Component({
  selector: "app-add-aliment",
  templateUrl: "./add-aliment.component.html",
  styleUrls: ["./add-aliment.component.scss"]
})
export class AddAlimentComponent implements OnInit {
  constructor(private alimentService: AlimentService) {}

  ngOnInit() {}
}
