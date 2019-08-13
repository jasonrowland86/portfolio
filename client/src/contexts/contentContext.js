import React, { createContext } from 'react';

export const ContentContext = createContext();

class ContentContextProvider extends React.Component {
  state = {
    landing: true,
    content: {
      backgroundColor: "#EDFD5D",
    },
    label: 'web developer',
    test: 'test'
  }

  render() {
    return(
      <ContentContext.Provider value={{...this.state}}>
        {this.props.children}
      </ContentContext.Provider>
    );
  }
}

export default ContentContextProvider;
