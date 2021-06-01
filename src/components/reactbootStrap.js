import { Carousel } from "react-bootstrap";

export function Bootstrap1() {
  return (
    <div>
      <div>
        <h1 className="bg-dark text-light p-2">Welcome to my World</h1>

        <Carousel>
          {[1, 2, 3].map((item, index) => (
            <Carousel.Item>
              <img
                clasname="w-50 m-3"
                style={{ backgroundSize: "cover" }}
                src={"https://picsum.photos/100" + index}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
