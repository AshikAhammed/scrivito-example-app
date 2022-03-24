import * as React from "react";
import * as Scrivito from "scrivito";
import Pagination from "react-js-pagination";

class PaginatedListWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activePage: 1 };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    Scrivito.navigateTo(Scrivito.currentPage(), { hash: "item-list" });
  }

  render() {
    const itemsCountPerPage = this.props.widget.get("itemsCountPerPage");
    const pageRangeDisplayed = this.props.widget.get("pageRangeDisplayed");

    const query = Scrivito.getClass("Page")
      .all()
      .order("title", "asc")
      .offset((this.state.activePage - 1) * itemsCountPerPage);

    const totalItemsCount = query.count();


    if (totalItemsCount === 0) {
      return <p>No items found!</p>;
    }

    const items = query.take(itemsCountPerPage);

    return (
      <div>
        <div className="result-content">
          <p className="strong">Exactly {totalItemsCount} results. </p>
        </div>

        <div id="item-list">
          {items.map((item) => {
            return (
              <div className="result-item" key={item.id()}>
                <div className="result-content">
                  <p>
                    <Scrivito.LinkTag className="h3" to={item}>
                      {item.get("title") || "Untitled"}
                    </Scrivito.LinkTag>
                    <br />
                    <Scrivito.LinkTag to={item}>
                      {Scrivito.urlFor(item)}
                    </Scrivito.LinkTag>
                  </p>
                  <p>{item.get("metaDataDescription") || "No description" } </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="nav justify-content-center">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={pageRangeDisplayed}
            itemClass="nav-item"
            linkClass="nav-link"
            activeClass="active"
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

Scrivito.provideComponent("PaginatedListWidget", PaginatedListWidget);
