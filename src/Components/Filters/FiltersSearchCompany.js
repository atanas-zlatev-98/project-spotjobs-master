import {Form, FormGroup,FormLabel} from 'react-bootstrap';
import '../../Style/custom_style.scss';
function  FiltersSearchCompany(props) {

    return (
        <Form>
            <Form.Group className='filters-scss p-5 mb-3'>
                        
                    <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label className='label-filters ps-2'>Категория</Form.Label>
                    </Form.Group>

            {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label='Телекомуникация'
            />
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label='Разработка на Софтуер'
            />
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label='Маркетинг'
            />
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label='Стройтелство'
            />
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label='Финанси'
            />
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label='Промишленост'
            />
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label='Дизайн'
            />
             <Form.Check 
              type={type}
              id={`default-${type}`}
              label='Поддръжка'
            />
          </div>
        ))}
                        
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                        <Form.Label className='label-filters ps-2'>Опит </Form.Label>
                        </Form.Group>
    
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                <Form.Check 
                  type={type}
                  id={`default-${type}`}
                  label='Стартиращи Компаний'
                />
                <Form.Check 
                  type={type}
                  id={`default-${type}`}
                  label='Над 1 Година'
                />
                <Form.Check 
                  type={type}
                  id={`default-${type}`}
                  label='Над 2 години'
                />
                <Form.Check 
                  type={type}
                  id={`default-${type}`}
                  label='Над 3 години'
                />
                <Form.Check 
                  type={type}
                  id={`default-${type}`}
                  label='Над 5 Години'
                />
              </div>
            ))}
                   
                        {/* <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                        <Form.Label className='filters-jobs'>Обявена заплата</Form.Label>
                           
                        </Form.Group>
    
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                <Form.Check 
                  type={type}
                  id={`default-${type}`}
                  label='От 800 до 1000лв'
                />
                <Form.Check 
                  type={type}
                  id={`default-${type}`}
                  label='От 1000 до 1800лв'
                />
                <Form.Check 
                  type={type}
                  id={`default-${type}`}
                  label='От 1800 до 2600лв'
                />
                 <Form.Check 
                  type={type}
                  id={`default-${type}`}
                  label='От 2600 до 5000лв'
                />
                <Form.Check 
                  type={type}
                  id={`default-${type}`}
                  label='от 5000 до 10000лв'
                />
              </div>
            ))}
              */}
           </Form.Group>
           
      </Form>
    )
}
export default FiltersSearchCompany;