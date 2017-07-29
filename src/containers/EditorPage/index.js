/* eslint-disable no-undef */

import React from 'react';
import ReactQuill from 'react-quill';
import Prism from 'prismjs';
import beautify from 'js-beautify';
import { connect } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import 'prismjs/themes/prism.css';
import './Editor.css';

const defaultContent =
  '<div><span style="font-size: 18px;">Quill Rich Text Editor</span>' +
  '</div><div><br></div><div>Quill is a free, <a href="https://githu' +
  'b.com/quilljs/quill/">open source</a> WYSIWYG editor built for th' +
  'e modern web. With its <a href="http://quilljs.com/docs/modules/"' +
  '>extensible architecture</a> and a <a href="http://quilljs.com/do' +
  'cs/api/">expressive API</a> you can completely customize it to fu' +
  'lfill your needs. Some built in features include:</div><div><br><' +
  '/div><ul><li>Fast and lightweight</li><li>Semantic markup</li><li' +
  '>Standardized HTML between browsers</li><li>Cross browser support' +
  ' including Chrome, Firefox, Safari, and IE 9+</li></ul><div><br><' +
  '/div><div><span style="font-size: 18px;">Downloads</span></div><d' +
  'iv><br></div><ul><li><a href="https://quilljs.com">Quill.js</a>, ' +
  'the free, open source WYSIWYG editor</li><li><a href="https://zen' +
  'oamaro.github.io/react-quill">React-quill</a>, a React component ' +
  'that wraps Quill.js</li></ul>';

/*
This is slightly more than the regular configuration,
and is here to allow a sneak peek on what's configurable.
*/
const modules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    [{ align: [] }, 'direction'],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'super' }, { script: 'sub' }],
    ['blockquote', 'code-block'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' }
    ],
    ['link', 'image', 'video'],
    ['clean']
  ]
};

class EditorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'snow',
      enabled: true,
      readOnly: false,
      value: defaultContent,
      events: []
    };
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  onChange = value => {
    this.setState({
      value
    });
  };

  tidyHtml = source => {
    return beautify.html_beautify(source, {
      unformatted: [],
      preserve_newlines: false
    });
  };

  render() {
    const { theme, value } = this.state;
    return (
      <div className="editor-container">
        <ReactQuill
          className="editor"
          theme={theme}
          modules={modules}
          value={value}
          onChange={this.onChange}
        />
        <pre className="preview">
          <code className="language-markup">
            {this.tidyHtml(value)}
          </code>
        </pre>
      </div>
    );
  }
}

EditorPage.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps)(EditorPage);
