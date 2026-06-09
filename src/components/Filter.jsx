function Filter({ filter, setFilter }) {

  const types = [

    "All",

    "Event",

    "Result",

    "Placement",

  ];

  return (

    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      {

        types.map((item) => (

          <button

            key={item}

            onClick={() => setFilter(item)}

            style={{
              padding: "8px 16px",
              cursor: "pointer",
              background:

                filter === item

                  ? "#2563eb"

                  : "#ffffff",

              color:

                filter === item

                  ? "white"

                  : "black",

              border: "1px solid #ccc",

              borderRadius: "5px",
            }}
          >
            {item}
          </button>

        ))

      }

    </div>

  );

}

export default Filter;