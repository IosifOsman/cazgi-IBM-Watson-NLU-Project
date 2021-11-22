import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    state = {emotionList:[]}
    render() {
        let mappedEmotionList = Object.entries(this.props.emotions).map(function(mapentry) {
            return (
                <tr>
                <td>{mapentry[0]}</td>
                <td>{mapentry[1]}</td>
                </tr>
            )
            })  
            this.setState({emotionList: mappedEmotionList})

        //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
                this.state.emotionList
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;