// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function AnimeDetails() {
//   const location = useLocation<Location>();

  
//   interface Titles {
//     en: string;
//     rj: string;
//   }
  
//   interface State {
//     banner_image: string;
//     cover_image: string;
//     descriptions: string;
//     titles: Titles;
//   }
  
//   interface Location {
//     state: State
//   }

//   const {
//     state: {
//       banner_image, cover_image, descriptions, titles: { en, rj },
//     },
//   } = location;

//   return (
//     <main>
//       <img src={banner_image} alt="Anime Banner" style={{ maxWidth: '100%' }} />
//       <h1>{en || rj}</h1>
//       <section className="anime-section-details">
//         <img src={cover_image} alt="Anime Cover" />
//         <div dangerouslySetInnerHTML={{ __html: descriptions.en }} />
//       </section>
//     </main>
//   );
// }

// export default AnimeDetails;
