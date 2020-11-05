import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { CardHeader } from 'reactstrap';

function FooterStrap(props) {
    return (
        <Card className="text-center bottom">
            <CardHeader>
            <small className="text-muted">&copy; {new Date().getFullYear()} All Rights Reserved. Designed &amp; developed by <a href="https://github.com/d-belleza" target="blank">David
                                 </a>, <a href="https://github.com/melissabcadena" target="blank">Melissa</a>, <a href="https://github.com/cheriecookson"
                    target="blank">Cherie</a>, <a href="https://github.com/sylviaprabudy/" target="blank">Sylvia
                               </a> &amp; <a href="https://github.com/osadenaike" target="blank">Femi
                               </a>
            </small>
            </CardHeader>
        </Card>
      
    )
}

export default FooterStrap;