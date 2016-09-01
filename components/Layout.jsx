import React, { PropTypes } from 'react';

function Layout({ children, scripts }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Todo App</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" type="text/css" />
        {scripts.map(url => <script src={url} async />)}
      </head>
      <body style={{ fontFamily: ['Varela Round', 'sans-serif'] }}>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  scripts: PropTypes.arrayOf(PropTypes.string),
};

export default Layout;
