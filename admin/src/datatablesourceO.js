export const userColumnsO = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "product",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 230,
    },
  
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "quantity",
      headerName: "quantity",
      width: 160,
    },
  ];
  