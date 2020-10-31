import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Navbar,
} from 'react-bootstrap';


function FooterStrap(props) {
    return(
        <Navbar>
            <h6>
            &copy; 2020 All Rights Reserved. Designed &amp; developed by <a href="https://github.com/d-belleza" target="blank">David
                                </a>, <a href="https://github.com/melissabcadena" target="blank">Melissa</a>, <a href="https://github.com/cheriecookson"
                        target="blank">Cherie</a>, <a href="https://github.com/sylviaprabudy/" target="blank">Sylvia
                                </a> &amp; <a href="https://github.com/osadenaike" target="blank">Femi
                                </a>
            </h6>
        </Navbar>
    )
}

// function Footer() {
//     return (
//         <Flex
//             bg="gray.1"
//             w="100%"
//             justifyContent="space-between"
//             alignItems="center"
//         >
//             <Flex flexDirection="row" justifyContent="center" alignItems="center">
//                 <Text p={3} color="white.2" fontSize="xl">
//                     &copy; 2020 All Rights Reserved. Designed &amp; developed by <a href="https://github.com/d-belleza" target="blank">David
//                                 </a>, <a href="https://github.com/melissabcadena" target="blank">Melissa</a>, <a href="https://github.com/cheriecookson"
//                         target="blank">Cherie</a>, <a href="https://github.com/sylviaprabudy/" target="blank">Sylvia
//                                 </a> &amp; <a href="https://github.com/osadenaike" target="blank">Femi
//                                 </a>
//                 </Text>
//             </Flex>
//         </Flex>
//     )
// }

export default FooterStrap;