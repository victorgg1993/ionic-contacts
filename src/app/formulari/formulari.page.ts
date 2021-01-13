import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { PhotoService } from "../services/photo.service";
import * as uuid from 'uuid';

@Component({
  selector: "app-formulari",
  templateUrl: "./formulari.page.html",
  styleUrls: ["./formulari.page.scss"],
})
export class FormulariPage implements OnInit {
  
  imatge_avatar = "assets/avatar.png";

  dada_usuari = {
    id: 0,
    nom: "",
    cognom: "",
    email: "",
    telefon: "",
    imatge: "",
  };

  constructor(private route: Router, public photoService: PhotoService) {}

  ngOnInit() {}

  cancelar() {
    this.route.navigate(["/contacts"]);
  }

  done() {
    this.dada_usuari.id = uuid.v4();
    this.dada_usuari.imatge = this.imatge_avatar;

    localStorage.setItem("perfil", JSON.stringify(this.dada_usuari));
    
    this.netejar_formulari();
    this.cancelar();
  }

  netejar_formulari()
  {
    this.dada_usuari = {
      id: 0,
      nom: "",
      cognom: "",
      email: "",
      telefon: "",
      imatge: "assets/avatar.png",
    }
    this.imatge_avatar = "assets/avatar.png";
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery().then(() => {
      let imatge_nova = this.photoService.photos.pop().webviewPath;
      this.imatge_avatar = imatge_nova;
    });
  }
}
