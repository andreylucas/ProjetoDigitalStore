import React, { useState } from 'react';
import { SelectButton } from 'primereact/selectbutton';

const ProductOptions = ({ options = [], shape, type }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    
    const itemTemplate = (option) => {
                
        if (type === 'color') {
            return (
                <span 
                    style={{ 
                        backgroundColor: option, 
                        width: '32px', 
                        height: '32px', 
                        borderRadius:  '50%'
                      
                    }} 
                />
            );
        }
       
        return <span>{option}</span>;
    };

    return (
        <div className="">
            <SelectButton 
                value={selectedOption} 
                onChange={(e) => setSelectedOption(e.value)} 
                options={options} 
                itemTemplate={itemTemplate}
                pt={{
                    button: {
                        className: shape === 'circle' ? 'border-circle p-0' : 'border-round-sm',
                        style: {
                            Width: '32px',
                            height: '32px',
                            justifyContent: 'center',
                            marginRight: '4px'
                        }
                    }
                }}
            />
        </div>
    );
};

export default ProductOptions;