import React, {createContext, Component} from "react"



export const ThemeContext = createContext()

 class ThemeContextProvider extends Component {
   state = {
    isLightTheme: true,
    light: {Syntax: "#555", ui: "#ddd", bg: "#ddd"},
    dark: {Syntax: "#eee", ul: "#333", bg: "#555"}
   }

  render() {
    return (
     <ThemeContext.Provider value={{...this.state}}>
      {this.props.children}
     </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider