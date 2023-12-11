// app/javascript/components/FeedbackForm.jsx
import React from 'react';

class FeedbackForm extends React.Component {
  // コンポーネントのロジックとマークアップ...
  render() {
    return (
      <div>
        <h1>フィードバックフォーム (React)</h1>
        <form action="/feedback" method="post">
          <label>
            名前:
            <input type="text" name="name" />
          </label>
          <br /><br />
          <label>
            フィードバック:
            <textarea name="feedback" />
          </label>
          <br /><br />
          <input type="submit" value="送信" />
        </form>
      </div>
    );
  }
}

export default FeedbackForm;
