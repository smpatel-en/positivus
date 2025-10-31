import Button from "../components/core/Button";
import Text from "../components/core/Text";
import LinkComponent from "../components/core/Link";

export default function Showcase() {
  return (
    <div className="w-full text-center">
      <br />
      <br />
      <h1>Showcase</h1>
      <br />
      <br />
      <br />
      <h2>Typography</h2>
      <br />
      <h1>
        <span>H1</span>Heading
      </h1>
      <h2>
        <span>H2</span>Heading
      </h2>
      <h3>
        <span>H3</span>Heading
      </h3>
      <h4>
        <span>H4</span>Heading
      </h4>
      <p>
        <span>Paragraph</span>Text
      </p>
      <br />
      <br />
      <h2>Colors</h2>
      <br />
      <div className="bg-primary mb-4 p-4 text-black">
        Primary Color -{" "}
        {getComputedStyle(document.documentElement).getPropertyValue(
          "--color-primary",
        )}
      </div>
      <div className="bg-secondary mb-4 p-4 text-white">
        Secondary Color -{" "}
        {getComputedStyle(document.documentElement).getPropertyValue(
          "--color-secondary",
        )}
      </div>
      <div className="bg-grey mb-4 p-4 text-black">
        Grey Color -{" "}
        {getComputedStyle(document.documentElement).getPropertyValue(
          "--color-grey",
        )}
      </div>
      <br />
      <br />
      <br />
      <h2>Components</h2>
      <br />
      <br />
      <Button variant="primary">Primary Button</Button>
      <br />
      <Button variant="secondary">Secondary Button</Button>
      <br />
      <Button variant="outline">Outline Button</Button>
      <Text variant="primary" as="p">
        Label
      </Text>
      <LinkComponent text-color="black" icon-color="black" icon-bg="primary">
        Link Hello
      </LinkComponent>
    </div>
  );
}
