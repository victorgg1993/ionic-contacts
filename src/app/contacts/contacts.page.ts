import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.page.html",
  styleUrls: ["./contacts.page.scss"],
})
export class ContactsPage implements OnInit {
  usuaris = require("../../assets/contacts.json");

  constructor(private route: Router, activatedRoute: ActivatedRoute) {
    activatedRoute.params.forEach((p) => this.agafar_perfils());
  }

  ngOnInit() {}

  usuari_click(usuari) {
    console.log("usuari seleccionat: ", usuari);
  }

  afegir_usuari() {
    this.route.navigate(["/formulari"]);
  }

  agafar_perfils() {
    let perfil = JSON.parse(localStorage.getItem("perfil"));

    if (perfil) {
      let t = perfil;

      if (perfil.length > 1) {
        t = perfil[perfil.length - 1];
      }

      //
      this.usuaris.push({
        id: t.id,
        firstName: t.nom,
        lastName: t.cognom,
        email: t.email,
        phone: t.telefon,
        image: t.imatge,
      });

      this.usuaris = this.borrar_repetits(this.usuaris);
    }
  }

  borrar_repetits(array) {
    return array.filter(
      (elem, i, arr) =>
        arr.findIndex((t) => {
          return t.id === elem.id;
        }) === i
    );
  }

  //
}
