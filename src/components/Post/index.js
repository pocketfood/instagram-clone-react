    // src/components/Post/index.js
    import React, { Component } from "react";
    import "./Post.css";


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


    function okaybutton() {
      alert('You clicked me!');
    }


    class Post extends Component {
      render() {
        return <article className="Post" ref="Post">
            <header>
              <div className="Post-user">
                <div className="Post-user-avatar"> 
                  <img src="https://images.unsplash.com/photo-1469460340997-2f854421e72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80" alt="Samantha" />
                </div>
                <div className="Post-user-nickname"><a className="Post-verified"></a> 
                  <span>Samantha</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt="Icon Living" src="https://images.unsplash.com/photo-1473283147055-e39c51463929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
              </div>
            </div>
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
            <small>05/2/2021 6:00pm</small>
            </div>

            <div className="Post-caption">
            <div className="Post-user">
                <div className="Post-user-avatar"> 
                  <img src="https://images.unsplash.com/photo-1469460340997-2f854421e72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80" alt="Samantha" />
                </div>
                <div className="Post-user-nickname">
                <span>Samantha </span><span></span>
                <a className="Post-verified"></a> 
                </div>
                <small> 05/2/2021 6:01pm</small>

              </div> 
              <p>Sometimes you just have to leave the city.</p>
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
            </div>
            
            <div className="Post-caption">
            <div className="Post-user">
                <div className="Post-user-avatar">
                  <img src="https://images.unsplash.com/photo-1612383543328-7033bcbaf8a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80" alt="Kevin" />
                </div>
                <div className="Post-user-nickname">
                  <span>Kevin </span>
                </div>
                <small> 05/2/2021 7:30pm</small>      
              </div>
              <p>Legit the biggest idiot I know... You really spent all night making this?</p>
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
            </div>

            <div className="Post-caption">
            <div className="Post-user">
                <div className="Post-user-avatar">
                  <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Tony" />
                </div>
                <div className="Post-user-nickname">
                  <span>Tony </span>
                </div>
                <small> 05/2/2021 8:45pm</small>      
              </div>
              <p>Get on your tandem bike and get out of here. Drink water and take Alpha GPC everyday. Also lemme get mod.
              <a href="#"> [Vitamins]</a>
              </p>
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
            </div>      
          </article>
        }
    }
    export default Post;