class CRUDop{

  static get(category) {
    return fetch("/" + category, {
      method: "GET",
      dataType: "JSON"
    })
    .then(data => data.json());
  }

  static getByCondition(category, condition) {
    return fetch("/" + category + "/" + condition.name + "/" + condition.value, {
      method: "GET",
      dataType: "JSON"
    })
    .then(data => data.json());
  }


  static add(category, object) {
    return fetch("/" + category + "/add", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      dataType: "JSON",
      body: object
    })
    .then((res) => {
      return res.status == 200;
    })
  }

  static delete(category, id) {
    return fetch("/" + category + "/delete", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      dataType: "JSON",
      body: JSON.stringify({
        id: id
      })
    })
    .then((res) => {
      return res.status == 200;
    })
  }

  static save(category, object) {
    return fetch("/" + category + "/update", {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      dataType: "JSON",
      body: object
    })
    .then((res) => {
      return res.status == 200;
    })
  }

  static filter(category, condition) {

  }

}

export default CRUDop;
