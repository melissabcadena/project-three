import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function FooterStrap(props) {
    return (
        <Card className="text-center">
            <Card.Header>&copy; 2020 All Rights Reserved. Designed &amp; developed by <a href="https://github.com/d-belleza" target="blank">David
                                 </a>, <a href="https://github.com/melissabcadena" target="blank">Melissa</a>, <a href="https://github.com/cheriecookson"
                    target="blank">Cherie</a>, <a href="https://github.com/sylviaprabudy/" target="blank">Sylvia
                               </a> &amp; <a href="https://github.com/osadenaike" target="blank">Femi
                               </a>
            </Card.Header>
            
        </Card>
      
    )
}

export default FooterStrap;