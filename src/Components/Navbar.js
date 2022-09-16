import React, {Component} from 'react'
import { ThemeContext } from './Contents/ThemeContext';

class Navbar  extends Component {
    static contextType = ThemeContext
    render() { 
        console.log(this.context)
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ?  light : dark
        return (
            <nav style={{background: theme.ui, color: theme.syntax}}> 
                <h1>content</h1>
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
         </nav>
        );
    }
}
 
export default Navbar