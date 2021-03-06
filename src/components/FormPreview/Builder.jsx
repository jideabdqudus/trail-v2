import React from 'react'
import ShortFreeText from './widget/ShortFreeText'
import NumberInput from './widget/NumberInput'
import RadioInput from './widget/RadioInput';
// import Mcq from './widget/Mcq';
import Mcq from './widget/Mcq'

const Components = {
    text: ShortFreeText,
    radio: RadioInput,
    number: NumberInput,
    mcradio:Mcq
};

const Builder = ({ content, id, isPreview }) => {
    if (typeof Components[content?.inputType] !== "undefined") {
      return React.createElement(Components[content?.inputType], {
        content: { ...content, id, isPreview },
        key: id,
      });
    }
    return React.createElement(() => null, { key: id });
  };

  export default Builder
