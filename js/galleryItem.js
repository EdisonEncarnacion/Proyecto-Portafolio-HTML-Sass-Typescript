"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryItem = void 0;
class GalleryItem {
    constructor(url, title, date) {
        this.url = url;
        this.title = title;
        this.date = date;
        this.html = `
    <div class="col-md-4">
        <div class="gallery-item">
            <img src="${this.url}" alt="">
            <div class="gallery-item-info">
                <h4>${this.title}</h4>
                <p>${this.date}</p>
            </div>
        </div>
    </div>
    `;
    }
}
exports.GalleryItem = GalleryItem;
