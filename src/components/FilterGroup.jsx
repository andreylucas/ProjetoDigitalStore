import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';

const FilterGroup = () => {
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [genders, setGenders] = useState([]);
    const [condition, setCondition] = useState('');

    
    const onBrandChange = (e) => {
        let _brands = [...brands];
        if (e.checked) _brands.push(e.value);
        else _brands.splice(_brands.indexOf(e.value), 1);
        setBrands(_brands);
    };

    const onCategoryChange = (e) => {
        let _categories = [...categories];
        if (e.checked) _categories.push(e.value);
        else _categories.splice(_categories.indexOf(e.value), 1);
        setCategories(_categories);
    };

    const onGenderChange = (e) => {
        let _genders = [...genders];
        if (e.checked) _genders.push(e.value);
        else _genders.splice(_genders.indexOf(e.value), 1);
        setGenders(_genders);
    };

    return (
        <div className="filter-container" style={{ width: '308px', padding: '20px', fontFamily: 'sans-serif', color: '#4d4d4d' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '15px' }}>
                Filtrar por
            </h3>

              <div className="filter-section" style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Marca</h4>
                {[
                    { name: 'Adiddas', value: 'Adiddas' },
                    { name: 'Calenciaga', value: 'Calenciaga' },
                    { name: 'K-Swiss', value: 'K-Swiss' },
                    { name: 'Nike', value: 'Nike' },
                    { name: 'Puma', value: 'Puma' }
                ].map((brand) => (
                    <div key={brand.value} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <Checkbox 
                            inputId={brand.value} 
                            name="brand" 
                            value={brand.value} 
                            onChange={onBrandChange} 
                            checked={brands.includes(brand.value)} 
                            pt={{ box: { style: { backgroundColor: brands.includes(brand.value) ? '#c92071' : '', borderColor: brands.includes(brand.value) ? '#c92071' : '' } } }} // Cor rosa da Digital Store
                        />
                        <label htmlFor={brand.value} style={{ marginLeft: '8px', fontSize: '14px', cursor: 'pointer' }}>{brand.name}</label>
                    </div>
                ))}
            </div>

            
            <div className="filter-section" style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Categoria</h4>
                {[
                    { name: 'Esporte e lazer', value: 'Esporte e lazer' },
                    { name: 'Casual', value: 'Casual' },
                    { name: 'Utilitário', value: 'Utilitário' },
                    { name: 'Corrida', value: 'Corrida' }
                ].map((category) => (
                    <div key={category.value} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <Checkbox 
                            inputId={category.value} 
                            name="category" 
                            value={category.value} 
                            onChange={onCategoryChange} 
                            checked={categories.includes(category.value)}
                            pt={{ box: { style: { backgroundColor: categories.includes(category.value) ? '#c92071' : '', borderColor: categories.includes(category.value) ? '#c92071' : '' } } }}
                        />
                        <label htmlFor={category.value} style={{ marginLeft: '8px', fontSize: '14px', cursor: 'pointer' }}>{category.name}</label>
                    </div>
                ))}
            </div>

            
            <div className="filter-section" style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Gênero</h4>
                {[
                    { name: 'Masculino', value: 'Masculino' },
                    { name: 'Feminino', value: 'Feminino' },
                    { name: 'Unisex', value: 'Unisex' }
                ].map((gender) => (
                    <div key={gender.value} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <Checkbox 
                            inputId={gender.value} 
                            name="gender" 
                            value={gender.value} 
                            onChange={onGenderChange} 
                            checked={genders.includes(gender.value)}
                            pt={{ box: { style: { backgroundColor: genders.includes(gender.value) ? '#c92071' : '', borderColor: genders.includes(gender.value) ? '#c92071' : '' } } }}
                        />
                        <label htmlFor={gender.value} style={{ marginLeft: '8px', fontSize: '14px', cursor: 'pointer' }}>{gender.name}</label>
                    </div>
                ))}
            </div>

            
            <div className="filter-section">
                <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Estado</h4>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <RadioButton 
                        inputId="novo" 
                        name="condition" 
                        value="Novo" 
                        onChange={(e) => setCondition(e.value)} 
                        checked={condition === 'Novo'} 
                        pt={{ icon: { style: { backgroundColor: condition === 'Novo' ? '#c92071' : '' } }, input: { style: { borderColor: condition === 'Novo' ? '#c92071' : '' } } }}
                    />
                    <label htmlFor="novo" style={{ marginLeft: '8px', fontSize: '14px', cursor: 'pointer' }}>Novo</label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <RadioButton 
                        inputId="usado" 
                        name="condition" 
                        value="Usado" 
                        onChange={(e) => setCondition(e.value)} 
                        checked={condition === 'Usado'} 
                        pt={{ icon: { style: { backgroundColor: condition === 'Usado' ? '#c92071' : '' } }, input: { style: { borderColor: condition === 'Usado' ? '#c92071' : '' } } }}
                    />
                    <label htmlFor="usado" style={{ marginLeft: '8px', fontSize: '14px', cursor: 'pointer' }}>Usado</label>
                </div>
            </div>
        </div>
    );
}
export default FilterGroup;