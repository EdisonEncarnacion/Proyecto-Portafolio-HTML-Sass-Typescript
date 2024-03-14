"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
function default_1() {
    if (localStorage.username) {
        document.getElementById('loginModalButtonContainer').innerHTML = `<span>Hola, ${(0, user_1.getUsers)()[0].username}</span>`;
        document.getElementById('addGalleryItemButtonContainer').innerHTML = `<button class="btn btn-primary btn-block">Agregar foto</button>
                                                                           <button id="closeSessionButton" class="btn btn-danger btn-block">Cerrar sesion</button>`;
        $('#closeSessionButton').on('click', function (e) {
            e.preventDefault();
            localStorage.clear();
            window.location.reload();
        });
    }
}
exports.default = default_1;
