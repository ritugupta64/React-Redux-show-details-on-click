import React, { Component } from "react";
import { connect } from "react-redux";
import { SelectedSong } from "../redux/actions";

class SongList extends Component {
  render() {
    //console.log(this.props.songList);
    const listing = this.props.songList.map((item, i) => {
      return (
        <div
          onClick={()=>this.props.SelectedSong(item)}
          key={i}
          style={{ fontSize: "20px", lineHeight: "24px", color: "#000" }}
        >
          {item.name}
        </div>
      );
    });
    return (
      <div>
        <h3>Song List</h3>
        {listing}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songList: state.songList
  };
};

export default connect(
  mapStateToProps,
  { SelectedSong }
)(SongList);
