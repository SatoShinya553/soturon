/* 目次のスタイル */
.toc-001 {
    margin-bottom: 30px;
    padding: 16px 16px 16px 32px;
    border: 1px solid #999;
    background-color: #f7f7f7;
    color: #333333;
}

.toc-001 div {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 5px 0;
}

.toc-001 ol {
    list-style-type: decimal;
    margin: 0;
    padding: 0 19.2px;
    overflow: hidden;
}

.toc-001 ol ol {
    margin-top: 5px;
}

.toc-001 li {
    padding: 5px 0;
}

.toc-001 a {
    color: #166c9d;
}


/* 見出しのスタイル */
.heading-41 {
    display: flex;
    align-items: center;
    padding: 8px 11.2px;
    background-color: #f2f2f2;
    color: #333333;
}

.heading-41::before {
    display: inline-block;
    width: 5px;
    height: 24px;
    margin-right: 8px;
    background-color: #346e9d;
    content: '';
}

/*実行ボタン*/
.run-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 250px;
    margin:0 auto;
    padding: .9em 2em;
    overflow: hidden;
    border: 1px solid #28a745;
    border-radius: 5px;
    background-color: #fff;
    color: #28a745;
    font-size: 1em;
}

.run-btn:hover {
    background-color: transparent;
    color: #fff;
}

.run-btn::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 0;
    height: 100%;
    background-color: #28a745;
    content: '';
    transition: width .3s ease;
}

.run-btn:hover::before {
    width: 100%;
}

/*リセットボタン*/
.reset-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 250px;
    margin:0 auto;
    padding: .9em 2em;
    overflow: hidden;
    border: 1px solid #ff0000;
    border-radius: 5px;
    background-color: #fff;
    color: #ff0000;
    font-size: 1em;
}

.reset-btn:hover {
    background-color: transparent;
    color: #fff;
}

.reset-btn::before {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 0;
    height: 100%;
    background-color: #ff0000;
    content: '';
    transition: width .3s ease;
}

.reset-btn:hover::before {
    width: 100%;
}

/*アコーディオンメニュー*/
.accordion-001 {
    max-width: 500px;
    background-color: #f5f5f5;
}

.accordion-001:not([open]) {
    margin-bottom: 7px;
}

.accordion-001 summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 1em 2em;
    border-radius: 5px;
    background-color: #346e9d;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
}

.accordion-001 summary::-webkit-details-marker {
    display: none;
}

.accordion-001 summary::after {
    transform: translateY(-25%) rotate(45deg);
    width: 7px;
    height: 7px;
    margin-left: 10px;
    border-bottom: 3px solid #fff;
    border-right: 3px solid #fff;
    content: '';
    transition: transform .3s;
}

.accordion-001[open] summary::after {
    transform: rotate(225deg);
}

.accordion-001 p {
    transform: translateY(-10px);
    opacity: 0;
    margin: 0;
    padding: 1em 2em 2em 2em;
    color: #333333;
    transition: transform .5s, opacity .5s;
}

.accordion-001[open] p {
    transform: none;
    opacity: 1;
}

/*ボックス*/
.box-012 {
    max-width: 400px;
    margin: 0;
    border: 2px solid #346e9d;
    border-radius: 3px;
    overflow: hidden;
}

.box-012 span {
    padding: .4em .8em;
    background-color: #346e9d;
    color: #fff;
}

.box-012 p {
    margin: 0;
    padding: 1em 1.5em;
    color: #333;
}

/*問題*/
.heading-24 {
    position: relative;
    padding-top: 1.5em;
    color: #333333;
    font-size: 20px;
}

.heading-24::before {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    color: #d9f4ff;
    font-size: 40px;
    line-height: 1;
    content: attr(data-number);
    pointer-events: none;
}

/*例*/
.box-021 {
    position: relative;
    max-width: 400px;
    margin: 1em auto;
    padding: 1em 1.5em;
    border: 2px solid #346e9d;
    border-radius: 3px;
    color: #333;
}

.box-021::before {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -1em;
    left: -1em;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background-color: #346e9d;
    color: #fff;
    font-weight: 600;
    content: attr(data-number);
}
