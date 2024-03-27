function UpdatePassword({ user, changeActiveButtonToProfile }) {
  const [newPassword, setnewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleNewPassword = (e) => {
    setnewPassword(e.target.value);
  };
  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const passwordSubmitHandler = (e) => {
    e.preventDefault();
    if (newPassword === repeatPassword) {
      const updatedPassword = {
        newPassword: newPassword,
        confirmPassword: repeatPassword,
      };
      axios
        .put(
          `${import.meta.env.VITE_URL}api/user/auth/updatePassword/${user._id}`,
          updatedPassword,
          {
            headers: { Authorization: sessionStorage.getItem("Authorization") },
          }
        )
        .then((res) => {
          console.log(res);
          // ? Add toast in here
          alert("Password Updated Successfully");
        })
        .catch((e) => {
          console.log(e);
          // ? Add toast in here
          alert("Some error occured, please try again later");
        });
    } else {
      // ? Add toast in here or something
      alert("Passwords do not match");
    }
  };
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="135"
        height="69"
        viewBox="0 0 135 69"
        fill="none">
        <path
          d="M10.6834 62.0656H124.317C125.211 62.0656 125.961 62.3658 126.566 62.9664C127.171 63.5668 127.473 64.3109 127.473 65.1986C127.473 66.0864 127.171 66.829 126.566 67.4266C125.961 68.0243 125.211 68.3232 124.317 68.3232H10.6834C9.78908 68.3232 9.03941 68.0229 8.43442 67.4224C7.82943 66.822 7.52694 66.0779 7.52694 65.1902C7.52694 64.3024 7.82943 63.5597 8.43442 62.9621C9.03941 62.3644 9.78908 62.0656 10.6834 62.0656ZM16.9964 20.3563L12.2981 28.5633C11.9257 29.2434 11.3673 29.6762 10.6227 29.8616C9.87804 30.047 9.16551 29.9539 8.48508 29.5822C7.80465 29.2105 7.37169 28.6529 7.18619 27.9095C7.00059 27.166 7.10202 26.4614 7.49048 25.7955L12.1887 17.5884H2.79222C1.98553 17.5884 1.31846 17.3275 0.791013 16.8059C0.263671 16.2841 0 15.6242 0 14.8263C0 14.0283 0.263724 13.3666 0.791171 12.8411C1.31851 12.3156 1.98553 12.0529 2.79222 12.0529H12.1887L7.49048 4.15862C7.10202 3.49281 7.00059 2.78815 7.18619 2.04464C7.37169 1.30124 7.80465 0.743683 8.48508 0.371981C9.16551 0.000279574 9.87804 -0.0928562 10.6227 0.0925776C11.3673 0.278011 11.9257 0.710779 12.2981 1.39088L16.9964 9.28501L21.6946 1.39088C22.067 0.710779 22.6255 0.278011 23.3701 0.0925776C24.1147 -0.0928562 24.8272 0.000279574 25.5076 0.371981C26.1881 0.743683 26.621 1.30124 26.8065 2.04464C26.9921 2.78815 26.8907 3.49281 26.5023 4.15862L21.804 12.0529H31.2005C32.0072 12.0529 32.6743 12.3137 33.2017 12.8354C33.7291 13.3572 33.9927 14.0171 33.9927 14.815C33.9927 15.613 33.7291 16.2747 33.2017 16.8002C32.6743 17.3257 32.0072 17.5884 31.2005 17.5884H21.804L26.5023 25.7955C26.8907 26.4614 26.9921 27.166 26.8065 27.9095C26.621 28.6529 26.1881 29.2105 25.5076 29.5822C24.8272 29.9539 24.1147 30.047 23.3701 29.8616C22.6255 29.6762 22.067 29.2434 21.6946 28.5633L16.9964 20.3563ZM67.5 20.3563L62.8017 28.5633C62.4294 29.2434 61.8709 29.6762 61.1263 29.8616C60.3817 30.047 59.6691 29.9539 58.9887 29.5822C58.3083 29.2105 57.8753 28.6529 57.6898 27.9095C57.5042 27.166 57.6057 26.4614 57.9941 25.7955L62.6924 17.5884H53.2959C52.4892 17.5884 51.8221 17.3275 51.2946 16.8059C50.7673 16.2841 50.5036 15.6242 50.5036 14.8263C50.5036 14.0283 50.7673 13.3666 51.2946 12.8411C51.8221 12.3156 52.4892 12.0529 53.2959 12.0529H62.6924L57.9941 4.15862C57.6057 3.49281 57.5042 2.78815 57.6898 2.04464C57.8753 1.30124 58.3083 0.743683 58.9887 0.371981C59.6691 0.000279574 60.3817 -0.0928562 61.1263 0.0925776C61.8709 0.278011 62.4294 0.710779 62.8017 1.39088L67.5 9.28501L72.1983 1.39088C72.5706 0.710779 73.1291 0.278011 73.8737 0.0925776C74.6183 -0.0928562 75.3309 0.000279574 76.0113 0.371981C76.6917 0.743683 77.1247 1.30124 77.3102 2.04464C77.4958 2.78815 77.3943 3.49281 77.0059 4.15862L72.3076 12.0529H81.7041C82.5108 12.0529 83.1779 12.3137 83.7054 12.8354C84.2327 13.3572 84.4964 14.0171 84.4964 14.815C84.4964 15.613 84.2327 16.2747 83.7054 16.8002C83.1779 17.3257 82.5108 17.5884 81.7041 17.5884H72.3076L77.0059 25.7955C77.3943 26.4614 77.4958 27.166 77.3102 27.9095C77.1247 28.6529 76.6917 29.2105 76.0113 29.5822C75.3309 29.9539 74.6183 30.047 73.8737 29.8616C73.1291 29.6762 72.5706 29.2434 72.1983 28.5633L67.5 20.3563ZM118.004 20.3563L113.305 28.5633C112.933 29.2434 112.375 29.6762 111.63 29.8616C110.885 30.047 110.173 29.9539 109.492 29.5822C108.812 29.2105 108.379 28.6529 108.193 27.9095C108.008 27.166 108.109 26.4614 108.498 25.7955L113.196 17.5884H103.799C102.993 17.5884 102.326 17.3275 101.798 16.8059C101.271 16.2841 101.007 15.6242 101.007 14.8263C101.007 14.0283 101.271 13.3666 101.798 12.8411C102.326 12.3156 102.993 12.0529 103.799 12.0529H113.196L108.498 4.15862C108.109 3.49281 108.008 2.78815 108.193 2.04464C108.379 1.30124 108.812 0.743683 109.492 0.371981C110.173 0.000279574 110.885 -0.0928562 111.63 0.0925776C112.375 0.278011 112.933 0.710779 113.305 1.39088L118.004 9.28501L122.702 1.39088C123.074 0.710779 123.633 0.278011 124.377 0.0925776C125.122 -0.0928562 125.834 0.000279574 126.515 0.371981C127.195 0.743683 127.628 1.30124 127.814 2.04464C127.999 2.78815 127.898 3.49281 127.51 4.15862L122.811 12.0529H132.208C133.014 12.0529 133.682 12.3137 134.209 12.8354C134.736 13.3572 135 14.0171 135 14.815C135 15.613 134.736 16.2747 134.209 16.8002C133.682 17.3257 133.014 17.5884 132.208 17.5884H122.811L127.51 25.7955C127.898 26.4614 127.999 27.166 127.814 27.9095C127.628 28.6529 127.195 29.2105 126.515 29.5822C125.834 29.9539 125.122 30.047 124.377 29.8616C123.633 29.6762 123.074 29.2434 122.702 28.5633L118.004 20.3563Z"
          fill="#6B83FF"
        />
      </svg>
      <form
        id="password-form"
        onSubmit={passwordSubmitHandler}
        className="flex flex-col gap-4">
        <Input
          id="newPassword"
          label="New Password"
          icon={Password}
          type="password"
          placeholder="6 characters or more"
          onChangeHandler={handleNewPassword}
        />
        <Input
          id="repeatPassword"
          label="Repeat New Password"
          icon={Password}
          type="password"
          placeholder="Re-enter your new password"
          onChangeHandler={handleRepeatPassword}
        />
      </form>
      <button
        form="password-form"
        type="submit"
        className="bg-lime px-5 py-2 text-button-text rounded-lg">
        Save
      </button>
      {/* Personal info */}
      <button
        onClick={() => changeActiveButtonToProfile()}
        className="bg-light-blue text-white px-2 flex items-center rounded-lg p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none">
          <path
            d="M1.74967 19.0001C1.50405 19.0001 1.28987 18.9117 1.10714 18.7348C0.924384 18.5579 0.833008 18.3408 0.833008 18.0834C0.833008 17.8378 0.924384 17.6236 1.10714 17.4409C1.28987 17.2581 1.50405 17.1668 1.74967 17.1668H18.2497C18.4953 17.1668 18.7095 17.2552 18.8922 17.4321C19.075 17.6089 19.1663 17.8261 19.1663 18.0834C19.1663 18.3291 19.075 18.5432 18.8922 18.726C18.7095 18.9087 18.4953 19.0001 18.2497 19.0001H1.74967ZM4.49967 12.4248H5.48333L13.55 4.36342L13.0617 3.85749L12.561 3.37447L4.49967 11.4411V12.4248ZM3.58301 12.6011V11.3512C3.58301 11.2525 3.59711 11.1605 3.62531 11.0753C3.65351 10.9901 3.70758 10.9076 3.78749 10.8277L13.8673 0.770773C13.9648 0.673224 14.0715 0.60212 14.1873 0.557463C14.303 0.512806 14.4185 0.490479 14.5336 0.490479C14.6606 0.490479 14.7769 0.512806 14.8827 0.557463C14.9885 0.60212 15.0919 0.674988 15.1929 0.776065L16.136 1.72447C16.2371 1.82201 16.3091 1.9266 16.352 2.03825C16.3949 2.1499 16.4163 2.26918 16.4163 2.39609C16.4163 2.50774 16.3949 2.62145 16.352 2.73721C16.3091 2.85297 16.2371 2.96138 16.136 3.06246L6.07916 13.1193C5.99926 13.1993 5.9167 13.2562 5.8315 13.2903C5.7463 13.3244 5.65433 13.3415 5.55561 13.3415H4.32338C4.11066 13.3415 3.93409 13.2712 3.79366 13.1308C3.65322 12.9904 3.58301 12.8138 3.58301 12.6011ZM13.55 4.36342L13.0617 3.85749L12.561 3.37447L13.55 4.36342Z"
            fill="#F5F5F5"
          />
        </svg>
        Edit Personal Info
      </button>
    </div>
  );
}
