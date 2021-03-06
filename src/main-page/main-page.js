import React from "react";
import "./main-page.css";
import Main from "../images/main.svg";
import Settings from "../images/settings.svg";
import Analytics from "../images/analytics.svg";
import Users from "../images/users.svg";
import Exit from "../images/exit.svg";
import Up from "../images/up.svg";
import Down from "../images/down.svg";
import Icon from "../images/Icon.svg";
import GainButton from "../images/gain.svg";
import ConsumptionButton from "../images/consumption.svg";
import TransferButton from "../images/transfer.svg";
import Dots from "../images/dots.svg";
import BlackButton from "../images/black-button.svg";
import RedButton from "../images/red-button.svg";
import GreenButton from "../images/green-button.svg";
import Export from "../images/export.svg";
export default function MainPage() {
  return (
    <>
      <div className="main-page">
        <div className="sidebar">
          <div className="h1">
            <span>LOGO</span>
          </div>
          <div className="userCard">
            <div className="block"></div>
            <h3>Христофориди Дмитрий</h3>
            <p className="email_user">dimitios.khristoforidi@gmail.com</p>
            <p className="title_user">Пользователь</p>
          </div>
          <button className="user_button">
            <img src={Main} alt="main.svg" />
            <span>Главная</span>
          </button>
          <button className="user_button">
            <img src={Settings} alt="main.svg" />
            <span>Настройки</span>
          </button>
          <button className="user_button">
            <img src={Analytics} alt="main.svg" />
            <span>Аналитика</span>
          </button>
          <button className="user_button">
            <img src={Users} alt="main.svg" />
            <span>Пользователи</span>
          </button>

          <button className="exit_button">
            <img src={Exit} alt="exit.svg" />
            <span>Выйти</span>
          </button>
        </div>
        <div className="content">
          <div className="Info-prices">
            <div className="Gain">
              <div className="Gain-info">
                <h1>Доход</h1>
                <div className="Gain-info-percent">
                  <img src={Up} alt="vector.svg" />
                  <p>12.3%</p>
                </div>
              </div>
              <p id="amount">103 341,12</p>
            </div>

            <div className="Withdraw">
              <div className="Withdraw-info">
                <h1>Расход</h1>
                <div className="Withdraw-info-percent">
                  <img src={Down} alt="vector.svg" />
                  <p>1.3%</p>
                </div>
              </div>
              <p id="amount">13250,10</p>
            </div>

            <div className="Balance">
              <div className="Balance-info">
                <h1>Баланс</h1>
                <div className="Balance-info-percent">
                  <img src={Up} alt="vector.svg" />
                  <p>10.52%</p>
                </div>
              </div>
              <p id="amount">+ 90 091,02</p>
            </div>
          </div>
          <div className="transaction-general">
            <h1>Транзакции</h1>
            <div className="transaction-buttons">
              <button className="gain-button">
                <img src={GainButton} alt="gain-tr.svg" />
                <span>Доход</span>
              </button>
              <button className="consumption-button">
                <img src={ConsumptionButton} alt="consumption.svg" />
                <span>Расход</span>
              </button>
              <button className="transfer-button">
                <img src={TransferButton} alt="transfer.svg" />
                <span>Перевод</span>
              </button>
            </div>
          </div>
          <div className="transaction-main">
            <div className="tr-main-buttons">
              <div className="tr-buttons">
                <button className="tr-button set">
                  <span>Кошелёк</span>
                  <img src={Up} alt="down.svg" />
                </button>
                <button className="tr-button set2">
                  <span>Контрагент</span>
                  <img src={Up} alt="down.svg" />
                </button>
                <button className="tr-button">
                  <span>Направление</span>
                  <img src={Up} alt="down.svg" />
                </button>
                <img src={Dots} id="dots" alt="dots.svg"/>
              </div>
              <button className="export-button">
                <img src={Export} alt="export" />
                <span>Экспорт</span>
              </button>
            </div>
            <table id="transaction-table">
              <tr>
                <th id="table-header">Тип</th>
                <th id="table-header">Дата</th>
                <th id="table-header">Сумма</th>
                <th id="table-header">Направление</th>
                <th id="table-header">Проект</th>
                <th id="table-header">Контрагент</th>
                <th className="wallet">Кошелёк</th>
              </tr>
              <tr>
                  <td><img src={BlackButton} alt="blackbutton.svg"/></td>
                  <td>12.01.2021</td>
                  <td>1200</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Demir Bank</td>
              </tr>
              <tr>
                  <td><img src={GreenButton} alt="blackbutton.svg"/></td>
                  <td>12.01.2021</td>
                  <td>15389,12</td>
                  <td>Breez Pro</td>
                  <td>Finance Management System</td>
                  <td>Иван Иванов</td>
                  <td>Demir Bank</td>
              </tr>
              <tr>
                  <td><img src={RedButton} alt="blackbutton.svg"/></td>
                  <td>12.01.2021</td>
                  <td>1200</td>
                  <td>Neobis</td>
                  <td>Без проекта</td>
                  <td>Иван Иванов</td>
                  <td>Demir Bank</td>
              </tr>
              <tr>
                  <td><img src={GreenButton} alt="blackbutton.svg"/></td>
                  <td>12.01.2021</td>
                  <td>1200</td>
                  <td>UmarCargo</td>
                  <td>Без проекта</td>
                  <td>Иван Иванов</td>
                  <td>Demir Bank</td>
              </tr>
              <tr>
                  <td><img src={GreenButton} alt="blackbutton.svg"/></td>
                  <td>12.01.2021</td>
                  <td>1200</td>
                  <td>UmarCargo</td>
                  <td>Без проекта</td>
                  <td>Иван Иванов</td>
                  <td>Demir Bank</td>
              </tr>
              <tr id="contr">
                  <td><img src={GreenButton} alt="blackbutton.svg"/></td>
                  <td>12.01.2021</td>
                  <td>1200</td>
                  <td>UmarCargo</td>
                  <td>Без проекта</td>
                  <td>Иван Иванов</td>
                  <td>Demir Bank</td>
              </tr>
              <tr>
                  <td><img id src={GreenButton} alt="blackbutton.svg"/></td>
                  <td>12.01.2021</td>
                  <td>1200</td>
                  <td>UmarCargo</td>
                  <td>Без проекта</td>
                  <td>Иван Иванов</td>
                  <td>Demir Bank</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
