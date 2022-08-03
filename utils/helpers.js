// activity 14 (remove 5 since we're not putting the date 5 years out)

module.exports = {

    format_date: (date) => {

      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${

        new Date(date).getFullYear()
      }`;
    },
  };