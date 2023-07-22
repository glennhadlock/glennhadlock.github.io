import "./GenericView.scss";

export default function GenericView(props) {
  const { children, title, banner, ...rest } = {
    banner: "https://images.pexels.com/photos/415368/pexels-photo-415368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ...props,
  };
  return (
    <div className="generic-view" {...rest}>
      <div className="banner">
        <div className="fg">
          <h1 className="title">{title}</h1>
        </div>
        {/* <img className="bg" src={banner} alt={title} /> */}
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
