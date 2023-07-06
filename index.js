const images = [
  'https://www.thesprucepets.com/thmb/uQnGtOt9VQiML2oG2YzAmPErrHo=/5441x0/filters:no_upscale():strip_icc()/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
  'https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?w=2000',
  'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
  'https://www.spectator.co.uk/wp-content/uploads/2023/05/6Cat-Alamy.jpg?w=1000',
  'https://natusan.co.uk/cdn/shop/articles/natusan-blog-how-cat-years-work-header_600x600_crop_center.jpg?v=1674474680',
  'https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg',
  'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
  'https://d2zp5xs5cp8zlg.cloudfront.net/image-29951-800.jpg',
];

class ImageViewer {
  constructor(images) {
    this.images = images;
    this.viewer = document.querySelector('.viewer');
    this.img = document.createElement('img');
    this.imageNumber = 0;
    this.renderImage();
  }
  renderImage() {
    this.viewer.innerText = '';
    this.img.src = this.images[this.imageNumber];
    this.img.style.maxWidth = '800px';
    this.img.style.maxHeight = '900px';
    this.viewer.append(this.img);
    this.img.addEventListener('load', (e) => {
      this.viewer.style.height = `${this.img.offsetHeight}px`;
    })
    this.addArrowsButton();
    this.attachButtonsEventListeners();
  }
  addArrowsButton() {
    this.divL = document.createElement('div');
    this.divR = document.createElement('div');
    this.divL.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    this.divR.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    this.imageNumber !== 0 ? this.viewer.prepend(this.divL) : null;
    this.imageNumber !== this.images.length - 1 ? this.viewer.append(this.divR) : null;
  }
  attachButtonsEventListeners() {
    this.divL.addEventListener('click', (e) => {
      this.imageNumber--;
      this.renderImage();
    });
    this.divR.addEventListener('click', (e) => {
      this.imageNumber++;
      this.renderImage();
    });
  }
}

new ImageViewer(images);