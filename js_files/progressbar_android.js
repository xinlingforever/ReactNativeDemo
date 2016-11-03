'use strict';

var ProgressBar = require('ProgressBarAndroid');
var React = require('React');
var UIExplorerBlock = require('UIExplorerBlock');
var UIExplorerPage = require('UIExplorerPage');

var TimerMixin = require('react-timer-mixin');

var MovingBar = React.createClass({
  mixins: [TimerMixin],

  getInitialState: function() {
    return {
      progress: 0
    };
  },

  componentDidMount: function() {
    this.setInterval(
      () => {
        var progress = (this.state.progress + 0.02) % 1;
        this.setState({progress: progress});
      }, 50
    );
  },

  render: function() {
    return <ProgressBar progress={this.state.progress} {...this.props} />;
  },
});

class ProgressBarAndroidExample extends React.Component {
  static title = '<ProgressBarAndroid>';
  static description = 'Horizontal bar to show the progress of some operation.';

  render() {
    return (
      <UIExplorerPage title="ProgressBar Examples">
        <UIExplorerBlock title="Horizontal Indeterminate ProgressBar">
          <ProgressBar styleAttr="Horizontal" />
        </UIExplorerBlock>

        <UIExplorerBlock title="Horizontal ProgressBar">
          <MovingBar styleAttr="Horizontal" indeterminate={false} />
        </UIExplorerBlock>

        <UIExplorerBlock title="Horizontal Black Indeterminate ProgressBar">
          <ProgressBar styleAttr="Horizontal" color="black" />
        </UIExplorerBlock>

        <UIExplorerBlock title="Horizontal Blue ProgressBar">
          <MovingBar styleAttr="Horizontal" indeterminate={false} color="blue" />
        </UIExplorerBlock>
      </UIExplorerPage>
    );
  }
}

module.exports = ProgressBarAndroidExample;