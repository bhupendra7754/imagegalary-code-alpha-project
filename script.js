const images = [
     'https://media.licdn.com/dms/image/v2/D4D16AQF5pJjHCna0kA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1726388591686?e=1738800000&v=beta&t=Alf0As2CoHBllcCx2FprQN7G_odAT7Rc-bJ3UNtFHAU' ,
    'https://media.licdn.com/dms/image/v2/D4D03AQFSAATdLawg2Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726388998089?e=1738800000&v=beta&t=zklzhdw0QG75HZtGcM4egp-58Yue2qsW_QJgqeAgHPY',
    'https://images1.fanpop.com/images/photos/1600000/Pics-from-the-zoo-animals-1674822-2560-1920.jpg',
    'https://www.rd.com/wp-content/uploads/2020/04/gettyimages-665660202.jpg',
    'https://www.pixelstalk.net/wp-content/uploads/images2/Sleeping-Leopard-HD-Animal-Wallpaper.jpg',
    'https://article.images.consumerreports.org/t_article_tout,f_auto/prod/content/dam/CRO%20Images%202019/Health/02Feb/CR-Health-Inlinehero-pet-poisons-0219 '
];
  
  let currentIndex = 0;
  
  function setImage(index) {
    currentIndex = index;
    const galleryImage = document.getElementById('gallery-image');
  
    // Fallback for failed image load
    galleryImage.onerror = () => {
      galleryImage.src = 'https://via.placeholder.com/800x400?text=Image+Unavailable';
    };
  
    galleryImage.src = images[currentIndex];
  }
  
  function navigate(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    setImage(currentIndex);
  }
  
  // Initialize the gallery with the first image
  setImage(0);
  