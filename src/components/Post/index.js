    // src/components/Post/index.js
    import React, { Component } from "react";
    import "./Post.css";
    import jsonData from "./Data.json";


    // Like button
    import FormControlLabel from '@material-ui/core/FormControlLabel';
    import Checkbox from '@material-ui/core/Checkbox';
    import Favorite from '@material-ui/icons/Favorite';
    import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
    // Share button
    import ShareIcon from '@material-ui/icons/Share';
    // Link button
    import LinkSharpIcon from '@material-ui/icons/LinkSharp';
    // thumb buttons
    import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';
    import ThumbDownSharpIcon from '@material-ui/icons/ThumbDownSharp';
    import { Divider } from "@material-ui/core";


    class Post extends Component {
      render() {
        return <article className="Post" ref="Post">
            {jsonData.map((post) => (
              
              <div key={post._id}>
              <div className="Post-user">
                <div className="Post-user-avatar"> 
                  <img src={post.useravatar} alt={post.user} />
                </div>
                <div className="Post-user-nickname"><a className="Post-verified"></a> 
                  <span>{post.user}</span>
                </div>
              </div>

              
            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt={post.title} src={post.image} />
                <div className="Panel" ref="Panel">
                <div className="Like" ref="Like">

                <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />}
        name="checkedH" />}
        label=""/>
        <FormControlLabel
        control={<ShareIcon icon={<ShareIcon />} 
        checkedIcon={<ShareIcon />}
        name="checkedH" />}
        label=""/>
        <FormControlLabel
        control={<LinkSharpIcon icon={<LinkSharpIcon />} 
        checkedIcon={<LinkSharpIcon />}
        name="checkedH" />}
        label=""/>

              </div>

              <small>{post.date}</small>

              </div>
              </div>
        <div className="Post-caption">
        <div className="Post-user">
            <div className="Post-user-avatar">
              <img src={post.useravatar} alt={post.user} />
            </div>
            <div className="Post-user-nickname">
            <span>{post.user}</span>
            <a className="Post-verified"></a> 
            </div>
            <small>{post.date}</small>
          </div> 
          <p>{post.description}</p>
            <div className="Post-user-stats">
            <FormControlLabel
            control={<Checkbox icon={<ThumbUpSharpIcon />} 
            checkedIcon={<ThumbUpSharpIcon />}
            name="checkedH" />}
            label=""/>
            <FormControlLabel
            control={<Checkbox icon={<ThumbDownSharpIcon />} 
            checkedIcon={<ThumbDownSharpIcon />}
            name="checkedH" />}
            label=""/>
            </div>
              <Divider></Divider>
          </div>
            </div>
            </div>
            ))}
          </article>
        }
    }
    export default Post;
