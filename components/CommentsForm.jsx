import React, {useState, useEffect} from 'react';
import {submitComment} from '../services';

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    storeData: false,
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name') || '',
      email: window.localStorage.getItem('email') || '',
      storeData:
        window.localStorage.getItem('name') ||
        window.localStorage.getItem('email') ||
        false,
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = e => {
    const {target} = e;
    if (target.type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    setEmailError(false);
    const {name, email, comment, storeData} = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }

    let regEmail = /.+@.+\.[A-Za-z]+$/;
    if (!email.match(regEmail)) {
      setEmailError('Please enter a valid email');
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitComment(commentObj).then(res => {
      if (res.createComment) {
        if (!storeData) {
          formData.name = '';
          formData.email = '';
        }
        formData.comment = '';
        setFormData(prevState => ({
          ...prevState,
          ...formData,
        }));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };

  return (
    <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg dark:bg-secondary">
      <h3 className="pb-4 mb-8 text-xl font-semibold border-b">
        Leave a Reply
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          value={formData.comment}
          onChange={onInputChange}
          className="w-full h-40 p-4 text-gray-700 bg-gray-100 rounded-lg outline-none dark:bg-primary dark:text-gray-200 focus:ring-2 focus:ring-gray-200"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
        <input
          type="text"
          value={formData.name}
          onChange={onInputChange}
          className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none dark:bg-primary dark:text-gray-200 focus:ring-2 focus:ring-gray-200"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          value={formData.email}
          onChange={onInputChange}
          className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none dark:bg-primary dark:text-gray-200 focus:ring-2 focus:ring-gray-200"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            checked={formData.storeData}
            onChange={onInputChange}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="text-gray-500 cursor-pointer dark:text-gray-400"
            htmlFor="storeData"
          >
            {' '}
            Save my name, email in this browser for the next time I comment.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are mandatory</p>
      )}
      {emailError && (
        <span className="text-sm font-medium text-red-500">{emailError}</span>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handlePostSubmission}
          className="inline-block px-8 py-3 text-lg font-medium text-white transition duration-500 transform bg-pink-600 rounded-full cursor-pointer ease hover:scale-90"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="float-right mt-3 font-medium text-green-500 text-md">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
