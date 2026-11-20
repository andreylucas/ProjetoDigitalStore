import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';


const GalleryProduct = () => {

     const [images, setImages] = useState([]);

   
    const imageService = {
        getImages() {
            return [
                {
                    src: "/produc-image-1.jpeg",
                    alt: 'Descrição da Imagem 1',
                    title: 'Título 1'
                },
                {
                   src: "/produc-image-1.jpeg",
                    alt: 'Descrição da Imagem 2',
                    title: 'Título 2'
                },
                {
                   src: "/produc-image-1.jpeg",
                    alt: 'Descrição da Imagem 3',
                    title: 'Título 3'
                },
                {
                    src: "/produc-image-1.jpeg",
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
 <div className="card flex justify-content-center m-3 ml-8 ">
            <Galleria
                value={images} 
                responsiveOptions={responsiveOptions} 
                numVisible={5} 
                style={{ width: '700px', height: '570px', radius: '4px' }} 
                showItemNavigators
                indicatorsPosition='bottom'
             
                showThumbnails={true}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                
            />
        </div>
    );
}
export default GalleryProduct;