import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Layout from "../layout";

describe("Layout", () => {
  describe("when on root path", () => {
    it("renders title and all posts link", () => {
      const location = {
        pathname: "/",
      };

      render(<Layout location={location} title="Test Title" />);

      expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: "Test Title | All Posts" })
      ).toBeInTheDocument();
      expect(screen.getByText(/Built with/)).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Gatsby" })).toBeInTheDocument();
    });
  });

  describe("when not on root path", () => {
    it("renders back link", () => {
      const location = {
        pathname: "/blog-post",
      };

      render(<Layout location={location} title="Test Title" />);

      expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: /Back to Test Title Index/i })
      ).toBeInTheDocument();
    });

    it("allows navigation back to index", () => {
      const location = {
        pathname: "/blog-post",
      };
      const user = userEvent.setup();

      render(<Layout location={location} title="Test Title" />);

      const backLink = screen.getByRole("link", {
        name: /Back to Test Title Index/i,
      });
      expect(backLink).toHaveAttribute("href", "/");
    });
  });
});
