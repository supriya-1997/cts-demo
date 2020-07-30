import React from 'react'
import { Link } from "react-router-dom";
const Login = () => {

    return (
        <>
            <div className="container">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8jHyD8rxcAAAD8qwAZFBUcFxggHB
                18enoVEBEeGRoRCgz8qgBRTk8NAwYJAABFQkOFhISioaHX1tZsamuRj4+srKw1MTKYlpf09PTGxcWzsrLs7Oz8tirh4OC6ublwbm///PXMy8s+OzxjYWEt
                KSpYVVX+6MX+8Nj/+vDl5OSDgYJMSUpbWVpubGz+3an9ynL90Ib90I/8uTz9w17+58H8syb+4LP/9uT+2Jv9yXf+26P8u0T8wlr+8Nf+58MRUrQoAAAJ
                a0lEQVR4nO2Z6XbqvA6GASdkbMLYMJWZtlDYQOnuDPv+7+o4seTEgbZMXe35lp4/rAzYemVZlp1MhiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIg
                iAIgiAIgiAIgiAIgiAIgiAIgiAIgiAI4j9FuVk1h8NiqVH/7KVOp9FSrpvKtaTVKd0Nh2atOTnckkmD99L+3Fj+xmEt97s+8x1L1x2PsUoj2VYlwuS6Wy
                aLuOiDJXA97aRaa5UGjHm8NcthLKglXXA5KGxTSbzQvjNEq063n2yzMwzNGNbC5u/EG0Fzb33tGbOMrERnw9gok+khrJ/pWw4+r0XGOo74U55VlHGvGb4
                dt2b72cv42cCyt2FywOomg0azhsWGiYGceqEZll/PlLNgh82Gn8VbgoZjZVWskWzbFM/8ctuJzWbce5csdop3nWhulnggbBUeEQrt7DZS4STwFDOcOJou
                8lFTer2VsMOb7SWwn7YoHKYAvQMKvf5UT9jstCbKv1g1NsXZIUHG06cKJ34+7RspERTmMxd68p+lPQS2bDTVyOel1dLtoNAwFcMts5vsiL+PzVUZ3rJ1q
                cYYocM+U1gfSIHSJFZWFY4ufcUF+h4K7xxsLDucWRgl3FmKwjR2ylJ09gQFOmxaGTB8i2EyCnQDSfxZTPuih5Z4OgMH5guKwmwwUAOOKeloJ3XIMflsaGO
                9hi7CyIkVGh5To0j3fTmQDoRpEfzF7sJRKwcg0TKhu9ooAAYj+d9u9KgNXds6t2RSgSuMQ1AYji5P0NIo7+swbQqnG6NWysROSmF+VGp0ZnEmMJxup1nBp/
                of8ToMjQdBPoH37el2z1NQb8Ocx/mQF77twmVWVcj7LfYbcs5I131M0Y9s8jGjt8Emv6kqtINWot+woyg+SvB6XmTTtsg/aBZ/XwcHbneMzoIAr0N8O+Cct
                upqqdBvKP1+nU0bAydaPjFh12EUsCNUCB210Hk+hEcAQX4hLofZqDXp2ap437C3+sUJ6xXFDQimrIeWgCZ9pih04HVIRnYh3fBOJv2mzMofKDSyEMXX0BM
                mz4quKAydUG5cypUYfL2lsJ6FGM0HcGcoGrIH+Ir0raIQshIGx54KFbI7FUoFcC0NgUFKKFT4SGEFM7iPQwaLlj7EV5qYa/oJhXagNnyYwla73KyZhjodQJ
                GOtWPRUg35UGG9XW6Uqhf2ToUYkvGSjTkpTh19eEekCFAoH8O6uL/CcmkY8DTse5hJvlKI1zsV1hvmdKTz6hsrrJRCWWXostzr+2q/3CS4Y90lFOKqlOmwQ
                xTWL7N8kbWVtfQEheUhX7Ds5JKeVngNfuTVH97CzBMvcJhMRbiAQvn4IIWN0Y7K9GiFfHugb7WmKizJGI33Px8rFAtRWuEhUXopa6s83xyyPefhRwpbBVn4
                Wb4sPhSFbVnZJTaGHysUIk5Q2JSavItSp9/fnUv3VVgfYIXgZ++ajX7V2lZYgMRvjxLbu+9TOPFAIDOjOfHBerivQhNGUA/ECrtjtajK0jdZNX8SpbPTFGK
                FhzXKaQpxa2EPIIVsK+ynixn1tsicSYWiq+MVQsNyHp2msIr+6quPY4X1kSy4FTuwHta7eAdXC1GnHa0QgwML7Uwrf4rCAizwstAupufhH7krSJ2V4S5Orp
                BomqiIj1aINbrcS5fhxlEKWyMwU1b8UG3KvXgHY9QYFIvVUuIociokGPL8pIabi/ZJCnE7KCt6bNfqHqFQXaQz8f4aC+ZWXAcYluPwPXXBhICu4bYNfY3OE
                TuxkxXiKUQ9wMO84ASFsi4vYd6EWYDdxdiWX4j6bqf2h1jZQZ12tMJqasjkvhTrjYMUTrDy88Ukk6c2ODOnuw6ibFF+wzJpGC3V95PTFDZVJ9ekSXiucZB
                CGQH6tXJMk4VzDflcRWQXnKLiv1jZObCZgH3o4QrLUpI3KxULyaM6a3awwswMS1IrKJaGVnLEwgXkU4UZPJG1AvNuCpYYmHKPVpiJ3aw70V7HQCMNdrjCZ
                hyWlhM1JD8XhIfG8Sy38xyMaVBY9uWBvvSN3D8er7ATx6UwPYAqx3Y6hyvMjFITzTche0bfGCKFYUU+KlxfX18Mwk1brJDvAdKjGx/4HK8w01UOkZ1Bqx6
                EkzpviKx9oEL1E4HBh0BMKBYVJlyhzYxusy2SSb1VLlV835CrfC21jWNdaeYJCjNDuXuCr0hlz85aePIECi1UBEfkW6cYeCDaiD9jGV504jj0I6VCIRs0U9
                +Lwu23LBCa8tNT9PEpcdwLCv1jFGYuA993+PrLnKlYfcsekxvaGvNC5HeMElzjacIlXMsyelLhDVmWw0OxKMT8YT4e6reTnyYlicqmXtSZo+dt3WJ6N/nh0
                YR+sKUGXO/39SlTLhW7xVpHflKbJL49lgV7X/N/d6qmWb2Mb3WST7+i3rkbXkyHZjP1bVl0E39RbG/1+5t43jzN75fzp5vnn7bkW7hZPGqS1dMPWjJ++QYP9
                140V8slcH9wGJ9cbTk+c5s3j1weDB8o/HvmLg7hgXv75awt9nKum1s9vN5zFlfujyvMvLo5LffWO2OLt8mY3EQKb8/Y/OG8hTGVezl3rCLLsPlzOvAIbnKR
                xuX3pINQ4dUPK8yM38PZomnrmzM2ulk8LsLfhZbTFmds90juo6Snubn78wzkeH7FM5gbeuyKt/uT6yGyuRKJXXPX81NFjv8tomVCW/HgfA7D43dUNUtXrF1
                8EVu/HW/S+O/iUSz37iKcfXMepA/ns/IkNiusQ7jIq+XNEdnh9u0dV3ktJ9bAB67wnNP7NOa5uNbSXPf9/u94b5m927dFzo199Cr+2eORsfo2gw9nfK8l60
                leXa4WLzfPXyyVz7fz1zVXF//VXW/g2RPkm9/D+FWtmflouNrj+8Ny/m9zqyrtPW9u/r0s1qucpql19uqffOn998xCyXiZUzXCzIRK+gqI76TffE8Uobda
                7vG7iqUTGL+stgzfEy232CSbWmra5qNufpTezeIIjZq7Si0zvUftR3cVnzKer9xDVPJ6aLm9g3j72U3FV4yfHh63J9oudVru/eV3RuOX9Db3D1c78kmsj
                Y/devl/ftjUe37ie3VeAWgqrutere/nt78wVx7HePP0NF8uX9fr9cNy+fafPSUkCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCII
                gCIIgCIIgCIIgCIL4Tv4Hu9e8exYznDIAAAAASUVORK5CYII=" style={{ float: 'none', marginLeft: '500px' }} height="70" width="100" alt="amazon" />
                <div className="card" style={{ width: '420px', margin: '0 auto', float: 'none' }}>
                    <div className="card-body">
                        <h3 className="ml-3">Sign-In</h3>
                        <form>
                            <div className="form-group">
                                <strong> <label htmlFor="email" class="float-left">Email(phone for mobile accounts)</label></strong>
                                <input type="email" className="form-control" id="email" name="email" />
                            </div>
                            <button type="button" className="btn btn-block float-left" style={{ backgroundColor: '#ffa64d' }}> Continue</button>
                        </form>
                        <p>By continuing,you agree to Amazon's <span className="text-primary">Conditions of Use</span> and <span className="text-primary">Privacy Notice.</span></p>
                        <i className="fas fa-caret-right"></i><span className="text-primary">Need Help?</span>
                    </div>
                </div>
                <div style={{ margin: '0 auto', float: 'none', marginLeft: '350px' }}>
                    <p className="line ml-3 mt-3">New to Amazon?</p>
                    <Link to="/CreateAccount"><button type="submit" className="btn" style={{ width: '420px', backgroundColor: '#ccffe6' }}>Create your Amazon Account</button></Link>
                </div>
            </div>
        </>
    )
}


export default Login
