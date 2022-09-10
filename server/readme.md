<h1>Installation AlmetHack Server.</h1>
<h2>
    <ul>
        <li>
            Firstly, install PHP version 8.0
        </li>
        <li>
            Add to PATH Environment PHP
        </li>
        <li>
            Open directory <span style="text-decoration: underline">almethack_backend</span> and change the settings in the file <span style="text-decoration: underline;">.env</span>
        </li>
        <li>
            Activate local or other MySQL database server 
        </li>
        <li>
            Use this commands:
            <ul>
                <li><strong>php artisan migrate --seed<strong> (It migrate all tables to database)</li>
                <li>php artisan serve (Run Laravel app)</li>
            </ul>
            <br> PS. (Laravel app is runned by default port: 8000)
        </li>
    </ul>
</h2>

<h1>How to use API</h1>

<h2>
    <ul>
        <li>
            <h3>Events. Method: GET.</h3>
            <ul>
                <li>/events/.<br> Get all Events on DataBase.</li><br>
                <li>/events/get/{id}. <br> Get Event on DataBase with id.</li><br>
            </ul>
        </li>
        <li>
            <h3>Admins. Method: POST.</h3>
            <ul>
                <li>
                    <h4>Admin add, delete and authorization.</h4>
                    <ul>
                        <li>/admin/add/.<br> Add admin, args: login, password, name, api_token.</li><br>
                        <li>/admin/delete/.<br> Delete admin, args: login, api_token.</li><br>
                        <li>/admin/auth/.<br> Authorize admin, args: login, password. Return: id, api_token</li><br>
                    </ul>
                </li>
                <li>
                    <h4>Application add, get, delete.</h4>
                    <ul>
                        <li>/admin/add/application/.<br> Add Application, args: type, name, preview, description, date, time, place, price, full_name, organization_name, phone.</li><br>
                        <li>/admin/get/applications/.<br> Get all Applications on DataBase, args: api_token.</li><br>
                        <li>/admin/get/applications/{id}.<br> Get Application on DataBase with id, args: api_token, id.</li><br>
                        <li>/admin/delete/applications/{id}.<br> Delete Application on DataBase with id, args: api_token, id.</li><br>
                    </ul>
                </li>
                <li>
                    <h4>The Application was sent correctly and approved.</h4>
                    <ul>
                        <li>/admin/add/events/.<br> Args: type, name, preview, description, date, time, place, price, full_name, organization_name, phone, api_token.</li><br>
                    </ul>
                </li>
            </ul>
            <h5>PS. Api_token has only administrator.</h5>
        </li>
    </ul>
</h2>
