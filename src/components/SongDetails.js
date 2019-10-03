import React, { Component } from "react";
import { connect } from "react-redux";

class SongDetails extends Component {

  
    
  render() {
    
    console.log(this.props && this.props.SongDetails && this.props.SongDetails.name)
    return <div>Song Details...
       {this.props && this.props.SongDetails && this.props.SongDetails.name}
    </div>;
  }
}

const mapStateToProps = state => {
  return {
    SongDetails: state.songSelectedDetails
  };
};

export default connect(mapStateToProps)(SongDetails);
