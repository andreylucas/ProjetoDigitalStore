import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';


const Gallery = () => {

     const [images, setImages] = useState([]);

   
    const imageService = {
        getImages() {
            return [
                {
                    src: "/home-slide-5.jpeg",
                    alt: 'Descrição da Imagem 1',
                    title: 'Título 1'
                },
                {
                   src: "/home-slide-6.jpeg",
                    alt: 'Descrição da Imagem 2',
                    title: 'Título 2'
                },
                {
                   src: "/home-slide-7.jpeg",
                    alt: 'Descrição da Imagem 3',
                    title: 'Título 3'
                },
                {
                    src: "/home-slide-8.jpeg",
                    alt: 'Descrição da Imagem 4',
                    title: 'Título 4'
                }
               
            ];
        }
    };

    useEffect(() => {
        setImages(imageService.getImages());
    }, []);

   
    const itemTemplate = (item) => {
        return <img src={item.src} alt={item.alt} style={{ display: '' }} />;
    };

   
    const thumbnailTemplate = (item) => {
        return <img src={item.src} alt={item.alt} style={{ width: "117px", height: "95px", display: 'block' }} />;
    };

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    return ( 
 <div className="card flex justify-content-center m-6">
            <Galleria
                value={images} 
                responsiveOptions={responsiveOptions} 
                numVisible={5} 
                style={{ width: '1440px', height: '681px', radius: '4px' }} 
                showItemNavigators
                indicatorsPosition='bottom'
                showIndicators
                showThumbnails={false}
                item={itemTemplate} 
                thumbnail={thumbnailTemplate} 
            />
        </div>
    );
}
export default Gallery;